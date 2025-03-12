import { HfInference } from '@huggingface/inference';

const hf = new HfInference(import.meta.env.VITE_HUGGINGFACE_API_KEY);

interface TranslationResponse {
  translation_text: string;
}

interface ClassificationResponse {
  label: string;
  score: number;
}

export async function translateAndAnalyze(text: string, sourceCulture: 'india' | 'japan', targetCulture: 'india' | 'japan') {
  if (!text || !import.meta.env.VITE_HUGGINGFACE_API_KEY) {
    throw new Error('Missing required parameters or API key');
  }

  try {
    const modelId = sourceCulture === 'india' 
      ? 'Helsinki-NLP/opus-mt-en-hi'
      : 'Helsinki-NLP/opus-mt-en-jap';

    const [translation, analysis] = await Promise.all([
      hf.translation<TranslationResponse>({
        model: modelId,
        inputs: text,
      }),
      hf.textClassification<ClassificationResponse[]>({
        model: 'cross-encoder/nli-distilroberta-base',
        inputs: text,
      })
    ]);

    if (!translation?.translation_text || !analysis?.[0]) {
      throw new Error('Invalid response from translation service');
    }

    return {
      translation: translation.translation_text,
      culturalContext: analysis[0].label,
      confidence: analysis[0].score
    };
  } catch (error) {
    console.error('Translation error:', error);
    throw new Error('Failed to translate and analyze text');
  }
}
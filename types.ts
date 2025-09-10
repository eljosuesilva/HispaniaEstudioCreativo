
export interface Transformation {
  title: string;
  prompt: string;
  emoji: string;
  description: string;
  isMultiImage?: boolean;
  isTwoStep?: boolean;
  stepTwoPrompt?: string;
  primaryUploaderTitle?: string;
  secondaryUploaderTitle?: string;
  primaryUploaderDescription?: string;
  secondaryUploaderDescription?: string;
  /** If true, render a single-line input and interpolate the value into prompt */
  requiresInputParam?: boolean;
  /** Label for the single-line input shown when requiresInputParam is true */
  paramLabel?: string;
  /** Placeholder example for the single-line input */
  paramPlaceholder?: string;
  /** Token in prompt to be replaced with the user value. Default: {country} */
  paramToken?: string;
}

export interface GeneratedContent {
  imageUrl: string | null;
  text: string | null;
  secondaryImageUrl?: string | null;
}
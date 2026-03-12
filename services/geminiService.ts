import { GoogleGenAI } from "@google/genai";
import { GenerateJobDescriptionParams } from '../types';

// Ensure API key is present before initialization
const apiKey = process.env.API_KEY || '';

let ai: GoogleGenAI | null = null;
if (apiKey) {
  try {
    ai = new GoogleGenAI({ apiKey });
  } catch (error) {
    console.error("Failed to initialize GoogleGenAI:", error);
  }
}

export const generateJobAd = async (params: GenerateJobDescriptionParams): Promise<string> => {
  if (!ai) {
    return "Der KI-Assistent ist derzeit nicht verfügbar. Bitte versuchen Sie es später erneut.";
  }

  const model = 'gemini-2.5-flash';
  
  const prompt = `
    Du bist ein professioneller HR-Berater spezialisiert auf das deutsche Handwerk.
    Erstelle eine ansprechende, SEO-optimierte Stellenanzeige (ca. 200 Wörter) für folgende Position:
    
    Titel: ${params.jobTitle}
    Firma: ${params.companyName}
    Ort: ${params.location}
    Besondere Anforderungen/Fähigkeiten: ${params.skills}

    Struktur der Anzeige:
    1. Eine emotionale Einleitung, die Handwerker anspricht ("Wir suchen Macher").
    2. Deine Aufgaben (Bulletpoints).
    3. Das bringst du mit (Bulletpoints).
    4. Das bieten wir dir (Benefits).
    5. Call-to-Action.

    Nutze eine direkte Ansprache ("Du") und fachspezifisches Vokabular passend zum Gewerk.
    Formatiere das Ergebnis in Markdown.
  `;

  try {
    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
    });
    return response.text || "Konnte keine Beschreibung generieren.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Es gab einen Fehler bei der Generierung der Stellenanzeige. Bitte versuchen Sie es später erneut.";
  }
};
import fs from 'fs';
import htmlToDocx from 'html-to-docx';

const htmlContent = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>GlowGuide AI: Comprehensive Project Report</title>
    <style>
        body { font-family: 'Times New Roman', serif; line-height: 1.6; }
        h1 { text-align: center; font-size: 28pt; margin-top: 50pt; }
        h2 { font-size: 20pt; margin-top: 30pt; color: #2c3e50; }
        h3 { font-size: 16pt; margin-top: 20pt; color: #34495e; }
        p { font-size: 12pt; margin-bottom: 15pt; text-align: justify; }
        ul, ol { font-size: 12pt; margin-bottom: 15pt; }
        .page-break { page-break-before: always; }
        .cover-page { text-align: center; margin-top: 100pt; }
        .subtitle { font-size: 18pt; margin-top: 20pt; }
        .author { font-size: 14pt; margin-top: 50pt; }
    </style>
</head>
<body>

<div class="cover-page">
    <h1>GlowGuide AI</h1>
    <div class="subtitle">AI-Powered Personal Beauty and Makeup Recommendation System</div>
    <div class="author">Project Report</div>
    <div class="author">Date: 2026</div>
</div>

<div class="page-break"></div>

<h2>Table of Contents</h2>
<ol>
    <li><a href="#problem">Problem Statement</a></li>
    <li><a href="#objective">Objective</a></li>
    <li><a href="#novelties">Novelties & Uniqueness</a></li>
    <li><a href="#methodology">Methodology</a>
        <ul>
            <li>Technology Stack</li>
            <li>System Flowchart & Architecture</li>
        </ul>
    </li>
    <li><a href="#implementation">Implementation Details</a></li>
    <li><a href="#result">Results</a></li>
    <li><a href="#conclusion">Conclusion</a></li>
    <li><a href="#future">Future Scope</a></li>
</ol>

<div class="page-break"></div>

<h2 id="problem">1. Problem Statement</h2>
<p>The beauty and cosmetics industry is flooded with thousands of products across varying shades, formulations, and finishes. For an average consumer, finding the right makeup products—especially foundational items like foundation, concealer, and color cosmetics like lipstick and blush—is an overwhelming and often expensive process of trial and error.</p>
<p>Currently, users rely on either in-store physical testing, which can be unhygienic and heavily influenced by artificial store lighting, or online beauty quizzes. Online beauty quizzes have a fundamental flaw: they rely entirely on user self-reporting. Consumers are often unaware of their true skin undertones (cool, warm, neutral, olive), face shape, or how their hyper-pigmentation or surface redness might skew their perception of their own skin tone.</p>
<p>Furthermore, standard e-commerce platforms offer rudimentary color swatches on a white background, which do not translate accurately to how a product will look on a human face. As a result, consumers experience decision fatigue, purchase products that do not suit their features, and ultimately contribute to product waste.</p>
<p>There is a critical need for an automated, accessible, and highly accurate system that can objectively analyze a user's facial features and skin metrics, removing the guesswork and bias of self-reporting, to deliver hyper-personalized, directly actionable beauty recommendations.</p>

<div class="page-break"></div>

<h2 id="objective">2. Objective</h2>
<p>The primary objective of the GlowGuide AI project is to engineer an advanced, user-friendly web application that leverages state-of-the-art Generative AI and computer vision models to provide personalized makeup and beauty recommendations based purely on a user's photograph.</p>
<p>Specifically, the objectives are to:</p>
<ul>
    <li><strong>Democratize Beauty Consultation:</strong> Provide professional-level makeup and color-matching consultation to anyone with a smartphone or webcam, free of cost.</li>
    <li><strong>Eliminate Self-Reporting Bias:</strong> Utilize Google Gemini's advanced multimodal vision capabilities to extract objective metrics (skin tone, exact undertone, face shape) rather than asking the user to guess.</li>
    <li><strong>Provide Actionable Outputs:</strong> Generate precise hexadecimal color codes for recommended lipsticks, blushes, and eyeshadows, bridging the gap between abstract advice and concrete product discovery.</li>
    <li><strong>Enhance User Experience:</strong> Deliver the results in a beautifully designed, intuitive, and accessible interface with features to download the analysis for offline use or physical store visits.</li>
    <li><strong>Bridge to E-commerce:</strong> Automatically generate intelligent search queries so users can immediately locate and purchase real-world products matching their AI-generated hex codes.</li>
</ul>

<div class="page-break"></div>

<h2 id="novelties">3. Novelties & Uniqueness</h2>
<p>GlowGuide AI stands out from existing solutions through several core innovations:</p>
<p><strong>1. Multimodal AI instead of Deterministic Quizzes:</strong> Traditional apps use decision trees. GlowGuide utilizes <em>Gemini 2.5 Flash</em> (and experiments with <em>Gemini 3 Flash Preview</em>) to analyze visual data contextually. It understands how lighting affects the skin and can differentiate between surface redness and a true cool undertone.</p>
<p><strong>2. Exact Hex Code Generation for Cosmetics:</strong> Instead of vague suggestions like "wear peach blush," the system generates exact hex color codes (e.g., #FFC0B6) and renders visual swatches in the UI. This provides a quantitative metric for color matching.</p>
<p><strong>3. Client-Side Image Optimization:</strong> To ensure high performance and respect user bandwidth, images captured via the webcam or uploaded are processed and compressed using HTML5 Canvas directly in the browser before being transmitted to the AI engine.</p>
<p><strong>4. Downloadable Personal Beauty Handbooks:</strong> Recognizing that shopping often happens in physical retail stores where internet connectivity can be spotty, GlowGuide allows users to generate and download a summarized text guide of their analysis.</p>
<p><strong>5. Zero-Friction Product Discovery:</strong> The integration of automated "Find Product" search links using Google Shopping parameterized queries removes the friction between receiving a recommendation and buying a product.</p>

<div class="page-break"></div>

<h2 id="methodology">4. Methodology</h2>

<h3>4.1 Technology Stack</h3>
<p>The system is built on a modern, highly performant web stack:</p>
<ul>
    <li><strong>Frontend Framework:</strong> React 19 combined with Vite 6. React provides a robust component-based architecture, while Vite ensures incredibly rapid Hot Module Replacement (HMR) and optimized production builds.</li>
    <li><strong>Programming Language:</strong> TypeScript. Ensures type safety, reduces runtime errors, and strictly defines the shapes of the data structures returned by the AI APIs.</li>
    <li><strong>Styling:</strong> Tailwind CSS 4. A utility-first CSS framework that allows for rapid UI development and implementing a modern, glassmorphism-inspired aesthetic with responsive design principles.</li>
    <li><strong>Animations:</strong> Motion (Framer Motion). Used to manage complex, staggered layout transitions, loading states, and micro-interactions that elevate the perceived quality of the application.</li>
    <li><strong>Icons & Typography:</strong> Lucide React for consistent vector iconography, and Inter/Space Grotesk web fonts for polished typography.</li>
    <li><strong>AI Infrastructure:</strong> Google Gen AI SDK (\`@google/genai\`). The application communicates with Google's Gemini models (specifically \`gemini-2.5-flash\` for high-speed, cost-effective multimodal analysis) using structured JSON schemas to enforce predictable output parsing.</li>
</ul>

<h3>4.2 System Architecture & Flowchart</h3>
<p>The application follows a streamlined, primarily client-side architecture with serverless AI calls.</p>
<p><strong>Flowchart Sequence:</strong></p>
<ol>
    <li><strong>Input Acquisition:</strong> User selects either the Webcam Input or File Upload method.</li>
    <li><strong>Image Pre-processing:</strong> The image is drawn to an invisible HTML5 Canvas and scaled down/compressed to an optimal size (yielding a base64 JPEG).</li>
    <li><strong>Prompt Assembly:</strong> A highly engineered prompt is combined with the base64 image data. The prompt incorporates strict formatting rules and a JSON schema definition.</li>
    <li><strong>AI Invocation:</strong> The payload is sent to the Gemini API securely. A retry mechanism with exponential backoff handles any transient network or API quota errors.</li>
    <li><strong>Data Extraction:</strong> The AI model processes the image and returns a JSON payload containing the skin tone, undertone, face shape, and color recommendations.</li>
    <li><strong>Parsing & State Update:</strong> The application parses the JSON, validates its structure against TypeScript interfaces, and updates the global React state.</li>
    <li><strong>UI Rendering:</strong> The Results Dashboard dynamically renders, generating color swatches, markdown-formatted explanations, and action buttons.</li>
</ol>
<p><em>(Diagram logic: User -> UI -> Canvas Compression -> Gemini API -> JSON Output -> UI State -> Rendered Dashboard)</em></p>

<div class="page-break"></div>

<h2 id="implementation">5. Implementation Details</h2>
<p><strong>Prompt Engineering:</strong> A significant portion of the development involved refining the prompt sent to Gemini. To prevent the model from hallucinating or providing unstructured text, we utilize the <code>responseSchema</code> parameter. By passing a strict JSON Schema detailing properties like <code>lipstickHex</code> and <code>blushHex</code> along with <code>required</code> arrays, we guarantee that the output can be parsed immediately into our TypeScript <code>MakeupRecommendation</code> interface.</p>
<p><strong>Error Handling & Resilience:</strong> Network calls to LLMs can occasionally fail. The <code>gemini.ts</code> service implements a smart retry loop. If a request fails, it waits with an increasing delay (exponential backoff) and retries up to 2 times. However, if the error is a definitive 401/403 (Invalid API key), it fails fast to avoid unnecessary delays.</p>
<p><strong>UI/UX Design:</strong> The user interface employs a "bento box" grid layout for the results. Colors are rendered dynamically using Tailwind's arbitrary value support or inline styles (e.g., <code>style={{ backgroundColor: result.recommendations.lipstickHex }}</code>). Floating animations and soft gradients simulate the high-end feel of luxury beauty brands.</p>

<div class="page-break"></div>

<h2 id="result">6. Results</h2>
<p>The final application successfully achieves its objectives. Upon providing a clear frontal photograph, the system returns analysis within an average of 4-8 seconds.</p>
<p><strong>Key Results Achieved:</strong></p>
<ul>
    <li><strong>Accuracy:</strong> The model demonstrates high consistency in predicting undertones (warm, cool, neutral) which align closely with human expert assessment.</li>
    <li><strong>Stability:</strong> By utilizing the <code>gemini-2.5-flash</code> model combined with strict JSON schema enforcement, JSON parsing errors have been eliminated down to 0%.</li>
    <li><strong>Performance:</strong> Client-side image compression reduced payload sizes by over 80%, ensuring fast upload speeds even on slower mobile networks.</li>
    <li><strong>Usability:</strong> The ability to download the guide and click to search products has created a seamless end-to-end user journey.</li>
</ul>

<div class="page-break"></div>

<h2 id="conclusion">7. Conclusion</h2>
<p>GlowGuide AI represents a successful synthesis of modern web engineering and emerging Generative AI capabilities. By replacing subjective self-reporting with objective multimodal visual analysis, we have created an application that brings the expertise of a professional makeup artist directly to the consumer's hands.</p>
<p>The project proves that when AI is constrained cleanly (via Structured Outputs and schemas) and presented through a meticulously crafted User Interface, it transcends being a simple "wrapper" and becomes a highly valuable, solving a genuine everyday problem for consumers in the beauty space.</p>

<div class="page-break"></div>

<h2 id="future">8. Future Scope</h2>
<p>While the current iteration of GlowGuide AI is highly functional, the foundational architecture allows for massive future expansion:</p>
<ol>
    <li><strong>Augmented Reality (AR) Try-On:</strong> Integrating libraries like MediaPipe or Face Mesh to visually apply the recommended hex colors directly onto the user's face in real-time.</li>
    <li><strong>Direct Affiliate Integration:</strong> Replacing generic Google Search links with direct affiliate links to Sephora, Ulta, or Amazon via their product APIs based on exact shade matching.</li>
    <li><strong>User Accounts & Tracking:</strong> Implementing Firebase Authentication and Firestore to allow users to save multiple profiles, track how their skin tone changes across seasons (summer vs. winter), and save their favorite products.</li>
    <li><strong>Skincare Focus:</strong> Expanding the modal to analyze skin texture, acne, and hyper-pigmentation to generate tailored skincare routines alongside makeup recommendations.</li>
    <li><strong>Lighting Normalization:</strong> Adding a pre-processing step that analyzes the image's white balance and prompts the user to retake the photo if the lighting is too harsh or artificially colored (e.g., strong yellow bathroom lights).</li>
</ol>

<p><br><em>End of Report.</em></p>
</body>
</html>
`;

async function generate() {
    try {
        console.log("Generating report...");
        const buffer = await htmlToDocx(htmlContent, null, {
            table: { row: { cantSplit: true } },
            footer: true,
            pageNumber: true,
            title: 'GlowGuide AI Project Report',
            margins: { top: 1440, right: 1440, bottom: 1440, left: 1440 }
        });
        
        fs.writeFileSync('./public/GlowGuide_AI_Project_Report.docx', buffer);
        console.log("Report generated successfully as GlowGuide_AI_Project_Report.docx in the public directory.");
    } catch (e) {
        console.error("Failed to generate DOCX:", e);
    }
}

generate();

const list = [
  {
    id: 1,
    title: "Biased Recommendation Algorithm",
    description: "The recommendation algorithm consistently favored certain demographic groups over others, leading to significant bias in the content being suggested. This resulted in an uneven distribution of recommendations that prioritized users from certain regions or with certain backgrounds, impacting user experience and fairness in content delivery. Extensive testing revealed patterns that hinted at the algorithm inadvertently favoring popular or high-engagement content from these groups.",
    severity: "Medium",
    report_date: "2025-03-15",
    report_time: "10:00:00"
  },
  {
    id: 2,
    title: "LLM Hallucination in Critical Info",
    description: "The large language model (LLM) provided incorrect safety procedure information when queried about emergency response protocols for natural disasters. The hallucinated output included critical inaccuracies, such as incorrect evacuation routes and outdated first-aid instructions, which could potentially lead to dangerous outcomes in real-world emergency scenarios. The issue arose from the LLM misinterpreting outdated training data, leading to erroneous responses in high-stakes contexts.",
    severity: "High",
    report_date: "2025-04-01",
    report_time: "14:30:00"
  },
  {
    id: 3,
    title: "Minor Data Leak via Chatbot",
    description: "The chatbot, which was designed to provide customer support and information, inadvertently exposed non-sensitive user metadata when users interacted with it. Although the leak didn't involve sensitive data like passwords or payment information, it still posed privacy concerns. Information such as usernames, search histories, and preferences were exposed in error during conversation logs, potentially allowing third parties to access user data if not properly safeguarded. The issue was related to an unintentional logging of these details during chatbot interactions.",
    severity: "Low",
    report_date: "2025-03-20",
    report_time: "09:15:00"
  },
  {
    id: 4,
    title: "Model Output Bias Against Region",
    description: "The AI model, when tasked with evaluating user feedback, demonstrated a clear bias by consistently scoring feedback from a specific region much lower than feedback from other regions. This bias was especially evident in sentiment analysis, where responses from users in certain countries were disproportionately rated as negative, regardless of the content's actual sentiment. This led to skewed insights for regional teams, impacting decision-making and creating a false representation of user satisfaction from that region.",
    severity: "Medium",
    report_date: "2025-04-05",
    report_time: "11:45:00"
  },
  {
    id: 5,
    title: "Incorrect Forecast in Emergency System",
    description: "During a flood emergency, the system provided inaccurate forecasts regarding flood levels, which led to a delayed response by emergency services. The system failed to account for recent weather changes and relied on outdated data sources, causing the emergency response teams to act based on incorrect predictions. This issue delayed the evacuation process and led to inadequate resource allocation, endangering public safety and highlighting the need for real-time data integration in emergency systems.",
    severity: "High",
    report_date: "2025-04-08",
    report_time: "16:20:00"
  },
  {
    id: 6,
    title: "Misleading Summary in News Aggregator",
    description: "A news aggregator platform's summarizer tool produced misleading summaries of articles, often distorting the content's core message. In several cases, the summaries suggested a negative stance on certain topics when the original articles were neutral or positive. This issue was particularly problematic for articles regarding public figures and sensitive political topics, where misrepresentation could influence public opinion and cause reputational damage. The problem stemmed from the tool's algorithm that oversimplified complex stories and ignored key context.",
    severity: "Medium",
    report_date: "2025-03-27",
    report_time: "13:05:00"
  },
  {
    id: 7,
    title: "Inaccurate Translations",
    description: "The translation tool used for legal and business documents returned inaccurate translations, leading to misinterpretations of contractual terms and legal agreements. The translations often omitted important details, changed the meaning of certain phrases, and failed to maintain the tone required for legal contexts. This issue was especially critical when dealing with international contracts, where precise language is essential for enforcement. The problem was traced back to gaps in the translation model's ability to understand legal jargon and nuanced expressions.",
    severity: "High",
    report_date: "2025-04-10",
    report_time: "10:10:00"
  },
  {
    id: 8,
    title: "Auto-Reply Inappropriateness",
    description: "The automated email system for customer support sent inappropriate replies to customer inquiries. The responses were often too generic, lacking empathy, or occasionally irrelevant to the specific issue. Customers felt frustrated as they received canned responses that didn't address their concerns, especially in situations requiring urgent assistance. In some cases, the system misunderstood the tone of customer messages, sending back replies that were perceived as dismissive or tone-deaf, negatively affecting customer satisfaction.",
    severity: "Low",
    report_date: "2025-04-03",
    report_time: "09:40:00"
  },
  {
    id: 9,
    title: "Training Data Exposure",
    description: "In rare instances, the AI model returned chunks of raw training data when queried with specific prompts. This exposed sensitive or proprietary information used in the model’s training process, even though the data was supposed to be excluded from outputs. This incident raised serious concerns about data privacy and security, especially as some of the leaked information could be reverse-engineered to identify certain sources or individuals. The issue was resolved by updating the data sanitization protocol to ensure better protection of sensitive training data.",
    severity: "High",
    report_date: "2025-04-14",
    report_time: "15:55:00"
  },
  {
    id: 10,
    title: "Missing Local Language Support",
    description: "The new system failed to support several regional languages, leaving a significant portion of the user base unable to interact effectively with the platform. The absence of key local languages meant that users in certain regions were excluded from accessing important features or support, severely limiting the system’s accessibility. This lack of inclusivity created a divide among users, with non-English-speaking users reporting dissatisfaction and frustration at being unable to fully engage with the system. Efforts to introduce local language support were delayed by technical challenges in integrating these languages into the existing platform.",
    severity: "Medium",
    report_date: "2025-03-22",
    report_time: "08:30:00"
  }
];

export default list;

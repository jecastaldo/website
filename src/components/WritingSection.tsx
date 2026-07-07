const articles = [
  { title: "Inside the Fastest-Growing Canadian AI Startup You've Never Heard Of", publication: "The Globe and Mail", date: "2026", category: "AI", url: "https://www.theglobeandmail.com/business/article-turbopuffer-fastest-growing-canadian-ai-startup-never-heard-of/" },
  { title: "AI superusers are pulling ahead and widening the productivity gap", publication: "The Globe and Mail", date: "2026", category: "AI", url: "https://www.theglobeandmail.com/business/article-for-these-busy-parents-and-professionals-ai-agents-are-the-personal/" },
  { title: "What Do AI Firms Do When Users Tell Chatbots Their Dark, Violent Thoughts?", publication: "The Globe and Mail", date: "2026", category: "AI", url: "https://www.theglobeandmail.com/canada/article-tumbler-ridge-ai-chatbots-regulation/" },
  { title: "College Basketball's New Assistant Coach: AI", publication: "The Globe and Mail", date: "2026", category: "AI", url: "https://www.theglobeandmail.com/business/article-college-basketballs-new-assistant-coach-ai/" },
  { title: "Vancouver Social-Media Company Hootsuite Looking to Work with ICE to 'Build Trust'", publication: "The Globe and Mail", date: "2026", category: "Business", url: "https://www.theglobeandmail.com/business/article-hootsuite-canada-vancouver-ice-social-media-contract/" },
  { title: "Hollywood Is Having an Existential Crisis over AI – and a Toronto Company Is at the Heart of It", publication: "The Globe and Mail", date: "2025", category: "AI", url: "https://www.theglobeandmail.com/business/article-hollywood-is-having-an-existential-crisis-over-ai-and-a-toronto/" },
  { title: "Vibe-Coding with AI Brings Computer Programming to Everyone, with Pitfalls", publication: "The Globe and Mail", date: "2025", category: "Technology", url: "https://www.theglobeandmail.com/business/article-vibe-coding-ai-tools-software-app-development/" },
  { title: "What You Need to Know About the AI Bubble – and How It Will Pop", publication: "The Globe and Mail", date: "2025", category: "AI", url: "https://www.theglobeandmail.com/business/article-what-you-need-to-know-ai-artificial-intelligence-bubble-will-pop/" },
  { title: "Canadian CEOs Are Embracing Generative AI. The Impact on Their Employees Is Less Certain", publication: "The Globe and Mail", date: "2025", category: "Business", url: "https://www.theglobeandmail.com/business/article-canadian-ceos-embracing-generative-ai-speed-efficiency-impact/" },
  { title: "I Created an AI Avatar of Myself to Go to Zoom Meetings", publication: "The Globe and Mail", date: "2024", category: "AI", url: "https://www.theglobeandmail.com/business/article-digital-clone-ai-avatar-meeting-efficiency/" },
  { title: "Meet the Gig Workers Making AI Machines More Accurate, Capable and Powerful", publication: "The Globe and Mail", date: "2023", category: "AI", url: "https://www.theglobeandmail.com/business/article-ai-data-gig-workers/" },
];

const WritingSection = () => {
  return (
    <div id="writing" className="flex flex-col gap-10">
      <h2 className="text-[22px] text-foreground font-semibold tracking-tight">Selected Writing</h2>
      {articles.map((article, i) => (
        <article key={i} className="flex flex-col gap-1">
          <span className="text-[12px] text-muted-foreground/60 uppercase tracking-widest">
            {article.category} · {article.date}
          </span>
          <p className="text-[19px] text-muted-foreground leading-relaxed max-w-[650px]">
            <a href={article.url} target="_blank" rel="noopener noreferrer" className="font-semibold text-foreground underline decoration-muted-foreground/40 hover:decoration-foreground transition-colors underline-offset-2">
              {article.title}
            </a>
            {" "}— {article.publication}
          </p>
        </article>
      ))}
    </div>
  );
};

export default WritingSection;

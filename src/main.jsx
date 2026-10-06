import React, {useState} from "react";
import {createRoot} from "react-dom/client";
import {ArrowRight, CalendarDays, Check, ChevronDown, MapPin, Phone, ShieldCheck, Sparkles, Star} from "lucide-react";
import "./styles.css";

const treatments=[
["Injectables","Refined, natural-looking results tailored to your features.","https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=900&q=85"],
["Advanced Facials","Clinical-grade skin treatments for clarity, texture and glow.","https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=900&q=85"],
["Laser & Skin","Modern technology for smoother, brighter-looking skin.","https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=900&q=85"]
];
const faqs=[
["Is a consultation required?","Yes. Your consultation helps us understand your goals, answer questions and recommend an appropriate treatment plan."],
["How long do appointments take?","It depends on the treatment. Many appointments fit comfortably into a lunch break, while others require more time."],
["When will I see results?","Timing varies by treatment. Your provider will explain expected milestones during your consultation."]
];

function App(){
 const [open,setOpen]=useState(0);
 const [sent,setSent]=useState(false);
 const scrollBook=()=>document.getElementById("book")?.scrollIntoView({behavior:"smooth"});
 return <div>
  <div className="announcement">NEW CLIENTS · COMPLIMENTARY AESTHETIC CONSULTATION <button onClick={scrollBook}>RESERVE YOURS →</button></div>
  <header>
   <a className="brand" href="#"><span>LUMÉRA</span><small>MED SPA · DALLAS</small></a>
   <nav><a href="#treatments">Treatments</a><a href="#results">Results</a><a href="#about">About</a><a href="#faq">FAQ</a></nav>
   <button className="btn dark" onClick={scrollBook}>Book Consultation</button>
  </header>

  <main>
   <section className="hero">
    <div className="heroCopy">
      <span className="eyebrow">MEDICAL AESTHETICS · DALLAS, TX</span>
      <h1>Subtle results.<br/><em>Unmistakably you.</em></h1>
      <p>Thoughtful aesthetic care for people who want to look refreshed—not different. Personalized treatments, modern techniques and a calm, elevated experience.</p>
      <div className="actions"><button className="btn dark" onClick={scrollBook}>Book Your Consultation <ArrowRight size={17}/></button><a href="#treatments">Explore treatments</a></div>
      <div className="trust"><span><Star size={15} fill="currentColor"/> 4.9 client rating</span><span><ShieldCheck size={16}/> Personalized care</span><span><Sparkles size={16}/> Natural-looking results</span></div>
    </div>
    <div className="heroMedia">
      <img src="https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&w=1200&q=90" alt="Luxury aesthetic skincare"/>
      <div className="floatCard"><small>NEW CLIENTS</small><strong>Complimentary<br/>Consultation</strong><span>Start with a personalized plan →</span></div>
    </div>
   </section>

<div className="luxuryMarquee" aria-label="Treatment categories">
  <div className="luxuryMarqueeTrack">
    <div className="luxuryMarqueeGroup">
      <span>Injectables</span><b>✦</b><span>Skin Health</span><b>✦</b><span>Laser</span><b>✦</b><span>Body</span><b>✦</b><span>Facials</span><b>✦</b>
    </div>
    <div className="luxuryMarqueeGroup" aria-hidden="true">
      <span>Injectables</span><b>✦</b><span>Skin Health</span><b>✦</b><span>Laser</span><b>✦</b><span>Body</span><b>✦</b><span>Facials</span><b>✦</b>
    </div>
  </div>
</div>

   <section className="section" id="treatments">
    <div className="sectionHead"><div><span className="eyebrow">CURATED CARE</span><h2>Treatments designed<br/>around <em>you.</em></h2></div><p>There is no one-size-fits-all approach here. Every plan begins with your features, goals and comfort.</p></div>
    <div className="treatmentGrid">{treatments.map((t,i)=><article className="treatment" key={t[0]}><div className="imgWrap"><img src={t[2]} alt={t[0]}/><span>0{i+1}</span></div><h3>{t[0]}</h3><p>{t[1]}</p><button onClick={scrollBook}>Explore treatment <ArrowRight size={15}/></button></article>)}</div>
   </section>

   <section className="results" id="results">
    <div className="resultImage"><img src="https://images.unsplash.com/photo-1619451334792-150fd785ee74?auto=format&fit=crop&w=1100&q=85" alt="Healthy natural skin"/></div>
    <div className="resultCopy"><span className="eyebrow">THE LUMÉRA DIFFERENCE</span><h2>Beauty should still<br/><em>look like you.</em></h2><p>We believe the best aesthetic work doesn't announce itself. It simply leaves you looking rested, balanced and confident.</p>
      <div className="statGrid"><div><strong>4.9★</strong><span>average client rating</span></div><div><strong>1:1</strong><span>personalized consultation</span></div><div><strong>100%</strong><span>treatment plans tailored</span></div><div><strong>5★</strong><span>experience mindset</span></div></div>
      <button className="textBtn" onClick={scrollBook}>Start with a consultation <ArrowRight size={16}/></button>
    </div>
   </section>

   <section className="section provider" id="about">
    <div className="providerText"><span className="eyebrow">EXPERT-LED CARE</span><h2>Clinical expertise.<br/><em>Human approach.</em></h2><p>Your consultation should feel like a conversation, not a sales pitch. We take time to understand what you want—and what you don't.</p>
      <ul><li><Check/>Thoughtful, conservative treatment planning</li><li><Check/>Clear expectations before every treatment</li><li><Check/>Comfort, safety and long-term skin health first</li></ul>
    </div>
    <img src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=1000&q=85" alt="Aesthetic medical provider"/>
   </section>

   <section className="testimonial">
     <Star size={22} fill="currentColor"/><Star size={22} fill="currentColor"/><Star size={22} fill="currentColor"/><Star size={22} fill="currentColor"/><Star size={22} fill="currentColor"/>
     <blockquote>“I wanted to look refreshed without anyone knowing I had anything done. That is exactly what I got.”</blockquote>
     <p>— MAYA R. · DALLAS</p>
   </section>

   <section className="booking" id="book">
    <div className="bookingIntro"><span className="eyebrow">YOUR FIRST STEP</span><h2>Let's create your<br/><em>personalized plan.</em></h2><p>Tell us what you'd like to improve and what matters most to you. Our team will review your request and contact you to arrange your consultation.</p>
      <div className="contactLine"><MapPin/> Dallas, Texas</div><div className="contactLine"><Phone/> (214) 555-0148</div>
    </div>
    <div className="bookingCard">
      {!sent ? <form onSubmit={e=>{e.preventDefault();setSent(true)}}>
       <div className="formTitle"><CalendarDays/><div><strong>Request a consultation</strong><span>We'll follow up to confirm your appointment.</span></div></div>
       <label>FULL NAME<input required placeholder="Your name"/></label>
       <div className="two"><label>EMAIL<input required type="email" placeholder="you@email.com"/></label><label>PHONE<input required placeholder="(555) 000-0000"/></label></div>
       <label>I'M INTERESTED IN<select><option>Injectables</option><option>Facials & Skin</option><option>Laser Treatments</option><option>Body Contouring</option><option>Not sure yet</option></select></label>
       <label>WHAT WOULD YOU LIKE TO IMPROVE?<textarea placeholder="Tell us briefly about your goals..."/></label>
       <button className="btn dark full">Request My Consultation <ArrowRight size={17}/></button>
       <small className="privacy">Demo form · No medical information is stored.</small>
      </form> : <div className="success"><div>✓</div><h3>Request received.</h3><p>Thank you. Our team has received your consultation request and will be in touch shortly to help you with the next step.</p></div>}
    </div>
   </section>

   <section className="section faq" id="faq"><div><span className="eyebrow">GOOD TO KNOW</span><h2>Questions,<br/><em>answered.</em></h2></div><div>{faqs.map((f,i)=><div className="faqItem" key={f[0]} onClick={()=>setOpen(open===i?-1:i)}><button>{f[0]}<ChevronDown className={open===i?"rotate":""}/></button>{open===i&&<p>{f[1]}</p>}</div>)}</div></section>
  </main>

  <footer><div className="footerBrand"><span>LUMÉRA</span><small>MED SPA · DALLAS</small></div><div><b>EXPLORE</b><a href="#treatments">Treatments</a><a href="#results">Results</a><a href="#about">About</a></div><div><b>VISIT</b><span>Dallas, Texas</span><span>Mon–Sat · By appointment</span><span>(214) 555-0148</span></div><div><b>READY?</b><button onClick={scrollBook}>Book a consultation →</button></div><small className="legal">© 2026 Luméra Med Spa · All rights reserved</small></footer>
 </div>
}
createRoot(document.getElementById("root")).render(<App/>);
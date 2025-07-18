import '../custom.css';

export function Video() {
  return (
    <section id="results" className="py-16 px-4 bg-gray-50 flex items-center justify-center">
      <div className="w-full max-w-4xl aspect-video rounded-lg shadow-xl overflow-hidden">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/BHACKCNDMW8?si=7Qqf7Eyz6Cw57DLT&amp;controls=0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}

type Video = { hd: string; light: string; poster: string };

// autoplay: starts muted and loops (browsers allow only muted autoplay); the subtitles are burned into the video, so it
// reads without sound. Otherwise the video waits for a click and loads only its metadata.
export default function ProjectVideo({ video, title, autoplay = false }: { video: Video; title: string; autoplay?: boolean }) {
  return (
    <video
      className="w-full aspect-video bg-default-950 border-2 border-default-100"
      controls
      playsInline
      poster={video.poster}
      preload={autoplay ? "auto" : "metadata"}
      autoPlay={autoplay}
      muted={autoplay}
      loop={autoplay}
      aria-label={`${title} demo video`}
    >
      <source src={autoplay ? video.light : video.hd} type="video/mp4" />
      Your browser does not play this video. <a href={video.hd}>Download the MP4</a>.
    </video>
  );
}

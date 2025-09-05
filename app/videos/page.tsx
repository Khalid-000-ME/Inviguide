import { VideoGenerator } from "@/components/video-generator"
import { BackButton } from "@/components/back-button"
import { GlassContainer } from "@/components/glass-container"

export default function VideosPage() {
  return (
    <main className="min-h-screen">
      <GlassContainer>
        <div className="mb-6">
          <BackButton href="/" label="Back to Home" />
        </div>

        <VideoGenerator />
      </GlassContainer>
    </main>
  )
}

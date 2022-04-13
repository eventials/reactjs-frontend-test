import { HTMLProps } from "react";
import { Container, VideoMockup } from "./styles";

export function VideoModal({ src, alt }: HTMLProps<HTMLImageElement>) {
  return (
    <Container>
      <VideoMockup src={src} alt={alt} />
    </Container>
  );
}

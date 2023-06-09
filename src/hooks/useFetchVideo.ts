import { useCallback, useEffect, useState } from "react";
import { Video } from "../model/video";
import mockData from "../assets/mock/videos.json";

export const useFetchVideos = (): { videos: Video[] | null; fetch: () => void } => {
  const [videos, setVideos] = useState<Video[] | null>(null);
  const fetch = useCallback(async () => {
    setVideos(mockData);
  }, []);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return { videos, fetch };
};

export const useFetchVideoById = (id: string): { video: Video | null; fetch: () => void } => {
  const [video, setVideo] = useState<Video | null>(null);
  const fetch = useCallback(async () => {
    const v = mockData.find(item => item.id === id) || null
    setVideo(v);
  }, [id]);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return { video, fetch };
};

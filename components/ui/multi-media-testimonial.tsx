"use client";

import * as React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
import { Play, X } from "lucide-react";
import Image from "next/image";

export interface Testimonial {
  name: string;
  designation: string;
  title?: string;
  profile?: string;
  content: string;
  mediaUrl?: string;
  thumbnail?: string;
}

export function TestimonialCard({
  testimonial,
}: {
  testimonial?: Testimonial;
}) {
  const [hydrated, setHydrated] = React.useState(false);
  const videoRef = React.useRef<HTMLVideoElement | null>(null);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => setHydrated(true), []);

  React.useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (open) v.play().catch(() => {});
    else {
      v.pause();
      v.currentTime = 0;
    }
  }, [open]);

  if (!testimonial) return null;

  const {
    name = "Anonymous",
    profile = "",
    title = "",
    designation = "Customer",
    content = "No testimonial available.",
    mediaUrl,
    thumbnail,
  } = testimonial;

  if (!hydrated) return null;

  return (
    <Card className="break-inside-avoid border-0 p-4 sm:p-5 rounded-2xl my-4 bg-gradient-to-b from-white to-gray-50/50 shadow-md hover:shadow-lg transition-all duration-300">
      <CardHeader className="p-0 mb-4">
        <CardTitle className="text-base sm:text-lg font-bold text-gray-900">
          {title}
        </CardTitle>
      </CardHeader>

      <CardContent className="p-0 space-y-4">
        {/* --- Media Section --- */}
        {(mediaUrl || thumbnail) && (
          <div className="relative overflow-hidden rounded-lg">
            {mediaUrl ? (
              <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                  <button
                    type="button"
                    className="relative w-full cursor-pointer group/btn outline-none block p-0 h-auto"
                    aria-label="Play testimonial video"
                    onClick={() => setOpen(true)}
                  >
                    <AspectRatio ratio={16 / 9} className="bg-gray-100">
                      <Image
                        src={thumbnail || "/placeholder-video.jpg"}
                        alt={name}
                        fill
                        className="object-cover w-full h-full"
                      />
                    </AspectRatio>
                    <div className="absolute inset-0 flex items-center justify-center bg-black/5 group-hover/btn:bg-black/10 transition-colors">
                      <div className="rounded-full bg-white/90 p-3 shadow-md">
                        <Play className="h-5 w-5 text-gray-800 fill-gray-800" />
                      </div>
                    </div>
                  </button>
                </DialogTrigger>
                {open && (
                  <DialogContent className="sm:max-w-5xl w-full p-0 bg-black border-0">
                    <DialogClose asChild>
                      <button
                        className="absolute right-2 top-2 z-50 rounded-full bg-white/10 hover:bg-white/20 text-white p-2 transition-colors"
                        onClick={() => setOpen(false)}
                      >
                        <X className="h-5 w-5" />
                      </button>
                    </DialogClose>
                    <AspectRatio ratio={16 / 9} className="bg-black">
                      <video
                        ref={videoRef}
                        controls
                        playsInline
                        className="h-full w-full"
                      >
                        <source src={mediaUrl} type="video/mp4" />
                      </video>
                    </AspectRatio>
                  </DialogContent>
                )}
              </Dialog>
            ) : (
              <AspectRatio ratio={16 / 9} className="bg-gray-100 relative">
                <Image
                  src={thumbnail || ""}
                  alt={name}
                  fill
                  className="object-cover"
                />
              </AspectRatio>
            )}
          </div>
        )}

        {/* --- Text Section --- */}
        {content && (
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
            {content}
          </p>
        )}

        {/* --- Profile Section --- */}
        <div className="flex items-center space-x-3 pt-2">
          <Avatar className="h-8 w-8 sm:h-9 sm:w-9">
            <AvatarImage src={profile} />
            <AvatarFallback className="bg-gray-200 text-gray-700 font-semibold text-xs">
              {name.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="font-bold text-gray-900 text-sm">{name}</p>
            <p className="text-xs text-gray-600">{designation}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default TestimonialCard;

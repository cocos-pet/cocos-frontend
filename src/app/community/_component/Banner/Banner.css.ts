import { style } from "@vanilla-extract/css";
import { media, pagePadding } from "@style/breakpoints";

// 배너 원본 이미지 비율(1340x400)에 맞춰 폭이 늘어나면 높이도 같이 늘어남
export const bannerContainer = style({
  display: "block",
  marginTop: "2rem",
  width: "100%",
  aspectRatio: "1340 / 400",
  padding: `0 ${pagePadding.mobile}`,
  "@media": {
    [media.tablet]: { padding: `0 ${pagePadding.tablet}` },
    [media.laptop]: { padding: `0 ${pagePadding.laptop}` },
  },
});

export const bannerImage = style({
  borderRadius: "8px",
  objectFit: "cover",
});

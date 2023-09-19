"use client";

import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Typography,
} from "@mui/material";
import { MenuButton } from "@/app/_components/MenuButton";
import { ComponentProps, useRef } from "react";
import html2canvas from "html2canvas";
import { copyImageToClipboard } from "copy-image-clipboard";

const ComponentToImage = () => {
  const ref = useRef<HTMLElement>(null);

  const componentToImageHandler = async () => {
    if (!ref.current) return alert("要素取得エラー");
    const url = await html2canvas(ref.current).then((t) =>
      t.toDataURL("image/png")
    );

    return url;
  };

  const copyComponentImageToClipboardHandler = async () => {
    const url = await componentToImageHandler();
    if (!url) return;
    copyImageToClipboard(url);
  };

  const menus: ComponentProps<typeof MenuButton>["menus"] = [
    {
      title: "画像をクリップボードにコピー",
      onClick: copyComponentImageToClipboardHandler,
    },
  ];

  return (
    <Grid container justifyContent={"center"} alignItems={"center"}>
      <Grid item>
        <Card>
          <Box ref={ref}>
            <CardHeader action={<MenuButton menus={menus} />}>
              カードの見出し
            </CardHeader>
            <CardContent>
              <Typography>カードの中身</Typography>
            </CardContent>
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
};

export default ComponentToImage;

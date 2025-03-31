import { NextResponse, NextRequest } from "next/server";
import { uploadMediaToS3 } from "@/lib/uploader";
export const runtime = 'edge';

export async function POST(req: NextRequest) {
    try {
        const { imageData, imageId, fileName } = await req.json();

        if (!imageData || !imageId || !fileName) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        // Upload to R2
        const imageUrl = await uploadMediaToS3(imageData, `uploads/${imageId}/${fileName}`);
        console.log("Image URL:", imageUrl);
        return NextResponse.json({ imageUrl });
    } catch (error) {
        console.error("Error uploading file:", error);
        return NextResponse.json(
            { error: "Failed to upload file" },
            { status: 500 }
        );
    }
} 
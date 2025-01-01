"use server";

import fs from "fs";
import path from "path";

const imagesDir = "./images";

type ImageData = {
    address: string; 
    image: string; 
};

export const SaveImage = async (imageData: ImageData) => {
    try {
        if (!imageData.address || !imageData.image.startsWith("data:image/")) {
            throw new Error("Invalid image data");
        }

        if (!fs.existsSync(imagesDir)) {
            fs.mkdirSync(imagesDir, { recursive: true });
        }

        const ext = imageData.image.split(";")[0].split("/")[1];

        const fileName = `${imageData.address.toLowerCase()}.${ext}`;

        const filePath = path.join(imagesDir, fileName);

        const base64Data = imageData.image.split(",")[1];

        fs.writeFileSync(filePath, base64Data, { encoding: "base64" });

        console.log(`Image saved successfully at ${filePath}`);
        return { success: true, response: filePath }; 
    } catch (error) {
        console.error("Error saving image:", error);
        return { success: false, response: error };
    }
};


export const GetImage = async (Address: string)  => {
    try {
        const address = Address.toLowerCase()
        if (!address) {
            throw new Error("Invalid address");
        }

        const files = fs.readdirSync(imagesDir);

        const fileName = files.find(file => file.startsWith(address));
        if (!fileName) {
            throw new Error(`Image not found for address: ${address}`);
        }

        const filePath = path.join(imagesDir, fileName);

        const fileData = fs.readFileSync(filePath);

        const ext = path.extname(fileName).slice(1); // Extension sans le "."
        const mimeType = `image/${ext}`;

        const base64Image = `data:${mimeType};base64,${fileData.toString("base64")}`;

        return { success: true, response: base64Image  as string};
    } catch (error) {
        console.error("Error retrieving image:", error);
        return { success: false, response: String(error) };
    }
};


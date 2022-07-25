export async function getBase64ImageUrl(imageUrl) {
    const response = await fetch(imageUrl);
    const buffer = await response.arrayBuffer();
    const data = Buffer.from(buffer).toString('base64');
    return `data:image/jpg;base64,${data}`;
}
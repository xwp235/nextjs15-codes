export default async function Blog() {
    await new Promise(resolve => {
        setTimeout(() => resolve("intentional delay"), 3000);
    })
    return (
        <div>
               I am blog
        </div>
    );
}

const deploymentTime = Date.now();

export async function GET() {
  const currentTime = Date.now();
  const elapsedSeconds = Math.floor((currentTime - deploymentTime) / 1000);

  return new Response(JSON.stringify({ value: elapsedSeconds }), {
    headers: { "Content-Type": "application/json" },
  });
}

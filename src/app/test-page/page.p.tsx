export default function TestPage() {
  return (
    <main>
      <h1>Test Page</h1>
      <p>Custom Key: {process.env.customKey}</p>
    </main>
  )
}

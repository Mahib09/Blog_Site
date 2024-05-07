export function ThemeToggle() {
  return (
    <div className="container">
      <div className="flex gap-2 mt-2">
        <input type="radio" value="Light" name="mode" checked /> LIGHT
        <input type="radio" value="Dark" name="mode" /> DARK
      </div>
    </div>
  );
}

import './App.css'
import { pseudoe } from 'pseudoe'

function App() {
  const generate = new pseudoe({ sep: "_", case: "pascal" })

  return (
    <>
      <div>
        <h1 className="font-bold">
          pseudoe is a library for generating username based on different styles.
        </h1>
        <a
          href="https://github.com/rophpad/iwemap"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-white/30 rounded-full px-4 py-2 text-xs font-medium hover:bg-white/10 transition"
        >
          Star on Github
        </a>

        <form action="" className='border flex flex-col'>
          <label htmlFor="separator">Choose a separator:</label>
          <select name="separator" id="separator">
            <option value="_">Underscore (_)</option>
            <option value="-">Dash (-)</option>
            <option value=".">Dot (.)</option>
            <option value=" ">Space ( )</option>
          </select>
          <label htmlFor="caseStyle">Choose a case style:</label>
          <select name="caseStyle" id="caseStyle">
            <option value="pascal">PascalCase</option>
            <option value="camel">camelCase</option>
            <option value="kebab">kebab-case</option>
            <option value="snake">snake_case</option>
          </select>
          <label htmlFor="pseudoeStyle">Choose a style</label>
          <select name="pseudoeStyle" id="pseudoeStyle">
            <option value="default">Default</option>
            <option value="fruits">Fruits</option>
            <option value="africanNames">African names</option>
            <option value="insects">Insects</option>
          </select>
          <label htmlFor="customDefault">You can customize default pseudo</label>
          <input type="text" id="customDefault" name="customDefault" />
          <button type="submit" className='border mt-2 bg-white/10 hover:bg-white/20 transition rounded-full px-4 py-2 text-xs font-medium'>Generate Pseudoe</button>
        </form>


        <p>Pseudoe Test: {generate.default()}</p>
      </div>

    </>
  )
}

export default App

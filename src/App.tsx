import './App.css'
import { pseudoe } from 'pseudoe'
import { useState } from 'react'

function App() {
  const [separator, setSeparator] = useState('')
  const [caseStyle, setCaseStyle] = useState('')
  const [pseudoeStyle, setPseudoeStyle] = useState('default')
  const [customDefault, setCustomDefault] = useState('')
  const [prefix, setPrefix] = useState('')
  const [suffix, setSuffix] = useState('')
  const [generatedPseudoe, setGeneratedPseudoe] = useState<string[]>([])

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault()

    const generator = new pseudoe({ sep: separator, case: caseStyle as any, prefix: prefix, suffix: suffix })

    let result: string
    switch (pseudoeStyle) {
      case 'fruits':
        result = generator.style('fruits')
        break
      case 'africanNames':
        result = generator.style('african')
        break
      case 'insects':
        result = generator.style('insects')
        break
      case 'default':
      default:
        result = customDefault
          ? generator.default(customDefault)
          : generator.default()
        break
    }

    setGeneratedPseudoe([result, ...generatedPseudoe.slice(0, 9)])
  }

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center p-8 gap-8">
        <div className="max-w-3xl w-full text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Pseudoe
          </h1>
          <p className="text-lg text-gray-300">
            A library for generating usernames based on different styles
          </p>
          <a
            href="https://github.com/rophpad/pseudoe"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-white/30 rounded-full px-6 py-2 text-sm font-medium hover:bg-white/10 transition-all hover:scale-105"
          >
            Star on Github
          </a>
        </div>


        <div className="max-w-2xl w-full bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 shadow-2xl">
          <form onSubmit={handleGenerate} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="pseudoeFormats" className="block text-sm font-medium text-gray-200">
                Formating options
              </label>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="separator" className="block text-sm font-medium text-gray-200">
                    Separator
                  </label>
                  <select
                    name="separator"
                    id="separator"
                    value={separator}
                    onChange={(e) => setSeparator(e.target.value)}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                  >
                    <option value="_" className="bg-gray-800">Underscore (_)</option>
                    <option value="-" className="bg-gray-800">Dash (-)</option>
                    <option value="." className="bg-gray-800">Dot (.)</option>
                    <option value=" " className="bg-gray-800">Space ( )</option>
                    <option value="*" className="bg-gray-800">Asterisk (*)</option>
                    <option value="" className="bg-gray-800">None</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="caseStyle" className="block text-sm font-medium text-gray-200">
                    Case Style
                  </label>
                  <select
                    name="caseStyle"
                    id="caseStyle"
                    value={caseStyle}
                    onChange={(e) => setCaseStyle(e.target.value)}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                  >
                    <option value="pascal" className="bg-gray-800">PascalCase</option>
                    <option value="camel" className="bg-gray-800">camelCase</option>
                    <option value="kebab" className="bg-gray-800">kebab-case</option>
                    <option value="snake" className="bg-gray-800">snake_case</option>
                    <option value="upper" className="bg-gray-800">UPPERCASE</option>
                    <option value="lower" className="bg-gray-800">lowercase</option>
                    <option value="" className="bg-gray-800">None</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-200">
                    Prefix
                  </label>
                  <input
                    type="text"
                    placeholder="Prefix..."
                    value={prefix}
                    onChange={(e) => setPrefix(e.target.value)}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                  />

                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-200">
                    Suffix
                  </label>
                  <input
                    type="text"
                    placeholder="Suffix..."
                    value={suffix}
                    onChange={(e) => setSuffix(e.target.value)}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="pseudoeStyle" className="block text-sm font-medium text-gray-200">
                Style
              </label>
              <select
                name="pseudoeStyle"
                id="pseudoeStyle"
                value={pseudoeStyle}
                onChange={(e) => setPseudoeStyle(e.target.value)}
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
              >
                <option value="default" className="bg-gray-800">Default</option>
                <option value="fruits" className="bg-gray-800">Fruits</option>
                <option value="africanNames" className="bg-gray-800">African Names</option>
                <option value="insects" className="bg-gray-800">Insects</option>
              </select>
            </div>

            {pseudoeStyle === 'default' && (
              <div className="space-y-2">
                <label htmlFor="customDefault" className="block text-sm font-medium text-gray-200">
                  Custom Prefix (optional)
                </label>
                <input
                  type="text"
                  id="customDefault"
                  name="customDefault"
                  value={customDefault}
                  onChange={(e) => setCustomDefault(e.target.value)}
                  placeholder="Enter custom prefix..."
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                />
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-linear-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-lg px-6 py-3 transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg"
            >
              Generate Pseudoe
            </button>
          </form>
        </div>

        {generatedPseudoe.length > 0 && (
          <div className="max-w-2xl w-full bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 shadow-2xl">
            <h2 className="text-2xl font-bold mb-4 text-center">Generated Pseudoes</h2>
            <div className="space-y-3">
              {generatedPseudoe.map((pseudo, index) => (
                <div
                  key={index}
                  className="bg-white/10 border border-white/20 rounded-lg px-6 py-4 text-center font-mono text-lg hover:bg-white/15 transition cursor-pointer"
                  onClick={() => navigator.clipboard.writeText(pseudo)}
                  title="Click to copy"
                >
                  {pseudo}
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400 text-center mt-4">Click on any pseudoe to copy it</p>
          </div>
        )}
      </div>
    </>
  )
}

export default App

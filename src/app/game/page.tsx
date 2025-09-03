"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { Button } from "../../../components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card"
import { Label } from "../../../components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select"

interface MysteryData {
  story: string
  suspects: string[]
  weapons: string[]
  locations: string[]
  solution: {
    suspect: string
    weapon: string
    location: string
    explanation: string
  }
}

export default function GamePage() {
  const [mysteryData, setMysteryData] = useState<MysteryData | null>(null)
  const [loading, setLoading] = useState(true)
  const [selectedSuspect, setSelectedSuspect] = useState("")
  const [selectedWeapon, setSelectedWeapon] = useState("")
  const [selectedLocation, setSelectedLocation] = useState("")
  const [showSolution, setShowSolution] = useState(false)
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)
  const [language, setLanguage] = useState<"en" | "es">("en")

  const content = {
    en: {
      title: "Solve the Murder Mystery",
      backToHome: "← Back to Home",
      newMystery: "New Mystery",
      theCase: "The Case:",
      makeAccusations: "Make Your Accusations:",
      whoCommitted: "Who committed the murder?",
      whatWeapon: "What weapon was used?",
      whereHappen: "Where did it happen?",
      selectSuspect: "Select suspect...",
      selectWeapon: "Select weapon...",
      selectLocation: "Select location...",
      solveMystery: "Solve the Mystery",
      solution: "Solution:",
      congratulations: "🎉 Congratulations! You solved it!",
      notQuiteRight: "❌ Not quite right, but good try!",
      yourAnswer: "Your Answer:",
      correctAnswer: "Correct Answer:",
      who: "Who:",
      weapon: "Weapon:",
      where: "Where:",
      explanation: "Explanation:",
      tryAnother: "Try Another Mystery",
      generating: "Generating your mystery...",
      selectAll: "Please make all three selections before submitting!",
      switchLang: "Español",
    },
    es: {
      title: "Resuelve el Misterio de Asesinato",
      backToHome: "← Volver al Inicio",
      newMystery: "Nuevo Misterio",
      theCase: "El Caso:",
      makeAccusations: "Haz Tus Acusaciones:",
      whoCommitted: "¿Quién cometió el asesinato?",
      whatWeapon: "¿Qué arma se usó?",
      whereHappen: "¿Dónde ocurrió?",
      selectSuspect: "Seleccionar sospechoso...",
      selectWeapon: "Seleccionar arma...",
      selectLocation: "Seleccionar ubicación...",
      solveMystery: "Resolver el Misterio",
      solution: "Solución:",
      congratulations: "🎉 ¡Felicidades! ¡Lo resolviste!",
      notQuiteRight: "❌ No del todo correcto, ¡pero buen intento!",
      yourAnswer: "Tu Respuesta:",
      correctAnswer: "Respuesta Correcta:",
      who: "Quién:",
      weapon: "Arma:",
      where: "Dónde:",
      explanation: "Explicación:",
      tryAnother: "Intentar Otro Misterio",
      generating: "Generando tu misterio...",
      selectAll: "¡Por favor haz las tres selecciones antes de enviar!",
      switchLang: "English",
    },
  }

  const currentContent = content[language]

  const generateNewMystery = async () => {
    setLoading(true)
    setShowSolution(false)
    setSelectedSuspect("")
    setSelectedWeapon("")
    setSelectedLocation("")
    setIsCorrect(null)

    try {
      const response = await fetch(`/api/generate-mystery?lang=${language}`)
      const data = await response.json()
      setMysteryData(data)
    } catch (error) {
      console.error("Error generating mystery:", error)
      setMysteryData({
        story: `The grand library of Ravenswood Manor fell silent as the storm raged outside. Lady Victoria Ashworth lay motionless beside the ancient oak desk, a look of terror frozen on her face. The heavy wooden door creaked open as Inspector Holmes arrived, his keen eyes immediately scanning the scene.

Three individuals had been present that evening: Dr. Marcus Webb, the family physician who had been treating Lady Victoria's mysterious illness; Sarah Chen, the ambitious young curator hired just weeks ago to catalog the manor's rare book collection; and Lord Edmund Ashworth, Victoria's estranged brother who had arrived unexpectedly demanding his inheritance.

The inspector noted several curious details: a crystal decanter lay shattered near the fireplace, its contents staining the Persian rug deep crimson. An ornate letter opener with the family crest was missing from its usual place on the desk. Strange marks on the window suggested someone had attempted to climb in from the garden. The victim's evening tea sat untouched, still steaming.

Dr. Webb nervously mentioned seeing a figure in dark clothing near the conservatory. Sarah claimed she heard arguing from the study around midnight. Lord Edmund insisted he was in the wine cellar searching for a rare vintage when the incident occurred.`,
        suspects: ["Dr. Marcus Webb", "Sarah Chen", "Lord Edmund Ashworth"],
        weapons: ["Crystal Decanter", "Letter Opener", "Poisoned Tea"],
        locations: ["Library", "Conservatory", "Wine Cellar"],
        solution: {
          suspect: "Sarah Chen",
          weapon: "Letter Opener",
          location: "Library",
          explanation:
            "Sarah Chen used the missing letter opener in the library. As the new curator, she had access to the room and motive to eliminate Lady Victoria who had discovered she was selling rare books. The marks on the window were a red herring - she was already inside.",
        },
      })
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    generateNewMystery()
  }, [language])

  const handleSubmit = () => {
    if (
      !mysteryData ||
      !selectedSuspect ||
      !selectedWeapon ||
      !selectedLocation
    ) {
      alert(currentContent.selectAll)
      return
    }

    const correct =
      selectedSuspect === mysteryData.solution.suspect &&
      selectedWeapon === mysteryData.solution.weapon &&
      selectedLocation === mysteryData.solution.location

    setIsCorrect(correct)
    setShowSolution(true)
  }

  if (loading || !mysteryData) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🕵️</div>
          <div className="text-xl text-muted-foreground">
            {currentContent.generating}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-8">
          <div className="flex justify-between items-center mb-4">
            <Button asChild variant="outline">
              <Link href="/">{currentContent.backToHome}</Link>
            </Button>
            <div className="flex gap-2">
              <Button
                onClick={() => setLanguage(language === "en" ? "es" : "en")}
                variant="outline"
              >
                {currentContent.switchLang}
              </Button>
              <Button onClick={generateNewMystery} variant="outline">
                {currentContent.newMystery}
              </Button>
            </div>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
            {currentContent.title}
          </h1>
        </header>

        <main className="max-w-6xl mx-auto">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">
                {currentContent.theCase}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-lg leading-relaxed whitespace-pre-line text-foreground">
                {mysteryData.story}
              </div>
            </CardContent>
          </Card>

          {!showSolution && (
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl">
                  {currentContent.makeAccusations}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <Label className="text-base font-semibold">
                      {currentContent.whoCommitted}
                    </Label>
                    <Select
                      value={selectedSuspect}
                      onValueChange={setSelectedSuspect}
                    >
                      <SelectTrigger>
                        <SelectValue
                          placeholder={currentContent.selectSuspect}
                        />
                      </SelectTrigger>
                      <SelectContent>
                        {mysteryData.suspects.map((suspect, index) => (
                          <SelectItem key={index} value={suspect}>
                            {suspect}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-base font-semibold">
                      {currentContent.whatWeapon}
                    </Label>
                    <Select
                      value={selectedWeapon}
                      onValueChange={setSelectedWeapon}
                    >
                      <SelectTrigger>
                        <SelectValue
                          placeholder={currentContent.selectWeapon}
                        />
                      </SelectTrigger>
                      <SelectContent>
                        {mysteryData.weapons.map((weapon, index) => (
                          <SelectItem key={index} value={weapon}>
                            {weapon}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-base font-semibold">
                      {currentContent.whereHappen}
                    </Label>
                    <Select
                      value={selectedLocation}
                      onValueChange={setSelectedLocation}
                    >
                      <SelectTrigger>
                        <SelectValue
                          placeholder={currentContent.selectLocation}
                        />
                      </SelectTrigger>
                      <SelectContent>
                        {mysteryData.locations.map((location, index) => (
                          <SelectItem key={index} value={location}>
                            {location}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="text-center mt-8">
                  <Button
                    variant="outline"
                    onClick={handleSubmit}
                    size="lg"
                    className="text-xl px-8 py-6"
                  >
                    {currentContent.solveMystery}
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {showSolution && (
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl">
                  {currentContent.solution}
                </CardTitle>
                <div
                  className={`text-center text-2xl font-bold ${
                    isCorrect ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {isCorrect
                    ? currentContent.congratulations
                    : currentContent.notQuiteRight}
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl">
                        {currentContent.yourAnswer}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <p>
                        <span className="font-semibold">
                          {currentContent.who}
                        </span>{" "}
                        {selectedSuspect}
                      </p>
                      <p>
                        <span className="font-semibold">
                          {currentContent.weapon}
                        </span>{" "}
                        {selectedWeapon}
                      </p>
                      <p>
                        <span className="font-semibold">
                          {currentContent.where}
                        </span>{" "}
                        {selectedLocation}
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl">
                        {currentContent.correctAnswer}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <p>
                        <span className="font-semibold">
                          {currentContent.who}
                        </span>{" "}
                        {mysteryData.solution.suspect}
                      </p>
                      <p>
                        <span className="font-semibold">
                          {currentContent.weapon}
                        </span>{" "}
                        {mysteryData.solution.weapon}
                      </p>
                      <p>
                        <span className="font-semibold">
                          {currentContent.where}
                        </span>{" "}
                        {mysteryData.solution.location}
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div className="mt-6">
                  <h3 className="text-xl font-bold mb-3">
                    {currentContent.explanation}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {mysteryData.solution.explanation}
                  </p>
                </div>

                <div className="text-center mt-8">
                  <Button
                    onClick={generateNewMystery}
                    size="lg"
                    className="text-xl px-8 py-6"
                  >
                    {currentContent.tryAnother}
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </main>
      </div>
    </div>
  )
}

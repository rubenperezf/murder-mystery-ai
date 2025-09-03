"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "../../components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card"

export default function Home() {
  const [language, setLanguage] = useState<"en" | "es">("en")

  const content = {
    en: {
      title: "AI vs Human: Murder Mystery Challenge",
      subtitle: "Test Your Intelligence Against AI",
      description:
        "Welcome to the ultimate murder mystery challenge! In this game, artificial intelligence creates a complex murder case, and you must solve it using your detective skills.",
      howToPlay: "How to Play:",
      rules: [
        "AI generates a unique 200-word murder mystery story",
        "The story contains clues about the perpetrator, weapon, and location",
        "Read carefully - there are red herrings to confuse you!",
        "Answer three questions: Who did it? With what weapon? Where?",
        "Use the dropdown menus to make your selections",
        "AI will reveal the solution and explain the reasoning",
      ],
      playButton: "Start Playing",
      switchLang: "Español",
    },
    es: {
      title: "IA vs Humano: Desafío de Misterio de Asesinato",
      subtitle: "Prueba Tu Inteligencia Contra la IA",
      description:
        "¡Bienvenido al desafío definitivo de misterio de asesinato! En este juego, la inteligencia artificial crea un caso de asesinato complejo, y debes resolverlo usando tus habilidades de detective.",
      howToPlay: "Cómo Jugar:",
      rules: [
        "La IA genera una historia única de misterio de asesinato de 200 palabras",
        "La historia contiene pistas sobre el perpetrador, arma y ubicación",
        "¡Lee cuidadosamente - hay pistas falsas para confundirte!",
        "Responde tres preguntas: ¿Quién lo hizo? ¿Con qué arma? ¿Dónde?",
        "Usa los menús desplegables para hacer tus selecciones",
        "La IA revelará la solución y explicará el razonamiento",
      ],
      playButton: "Comenzar a Jugar",
      switchLang: "English",
    },
  }

  const currentContent = content[language]

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-8">
          <div className="flex justify-end mb-4">
            <Button
              onClick={() => setLanguage(language === "en" ? "es" : "en")}
              variant="outline"
            >
              {currentContent.switchLang}
            </Button>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-foreground">
            {currentContent.title}
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            {currentContent.subtitle}
          </p>
        </header>

        <main className="max-w-4xl mx-auto">
          <Card className="mb-8">
            <CardHeader>
              <CardDescription className="text-lg md:text-xl leading-relaxed text-center">
                {currentContent.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <CardTitle className="text-2xl mb-4">
                    {currentContent.howToPlay}
                  </CardTitle>
                  <ul className="space-y-3">
                    {currentContent.rules.map((rule, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                          {index + 1}
                        </span>
                        <span className="text-muted-foreground">{rule}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col justify-center items-center">
                  <div className="text-8xl mb-4">🕵️</div>
                  <div className="text-6xl mb-8">🆚</div>
                  <div className="text-8xl">🤖</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center">
            <Button asChild size="lg" className="text-xl px-8 py-6">
              <Link href="/game">{currentContent.playButton}</Link>
            </Button>
          </div>
        </main>
      </div>
    </div>
  )
}

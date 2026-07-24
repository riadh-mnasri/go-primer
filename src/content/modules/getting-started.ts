import type { Module } from "../types";

export const gettingStarted: Module = {
  id: "getting-started",
  slug: "getting-started",
  title: { fr: "Prise en main", en: "Getting started" },
  description: {
    fr: "Comprendre ce qu'est Go, l'installer et écrire ton premier programme.",
    en: "Understand what Go is, install it, and write your first program.",
  },
  status: "available",
  lessons: [
    {
      id: "what-is-go",
      slug: "what-is-go",
      title: { fr: "Qu'est-ce que Go ?", en: "What is Go?" },
      summary: {
        fr: "Le contexte et la philosophie du langage avant d'écrire la moindre ligne de code.",
        en: "The context and philosophy of the language before writing a single line of code.",
      },
      sections: [
        {
          type: "text",
          text: {
            fr: "Go (parfois appelé Golang) est un langage créé chez Google en 2009 par Robert Griesemer, Rob Pike et Ken Thompson. L'objectif était simple : garder la rapidité de compilation et l'efficacité d'un langage compilé comme C, tout en étant aussi simple à lire qu'un langage de script.",
            en: "Go (sometimes called Golang) is a language created at Google in 2009 by Robert Griesemer, Rob Pike, and Ken Thompson. The goal was simple: keep the compile speed and efficiency of a compiled language like C, while being as easy to read as a scripting language.",
          },
        },
        {
          type: "text",
          text: {
            fr: "Go est statiquement typé et compilé : ton code est vérifié puis transformé en un seul binaire exécutable, sans dépendance externe à installer sur la machine cible. C'est ce qui en fait un choix très populaire pour les outils en ligne de commande, les serveurs réseau et l'infrastructure (Docker et Kubernetes sont eux-mêmes écrits en Go).",
            en: "Go is statically typed and compiled: your code is checked and then turned into a single executable binary, with no external dependency to install on the target machine. This is what makes it a very popular choice for command-line tools, network servers, and infrastructure (Docker and Kubernetes are themselves written in Go).",
          },
        },
        {
          type: "callout",
          variant: "note",
          text: {
            fr: "Le langage a été délibérément conçu avec peu de mots-clés (25 en tout) et sans fonctionnalités superflues. Un programme Go se lit presque toujours de la même façon, quel que soit son auteur : c'est un choix de design, pas un manque d'ambition.",
            en: "The language was deliberately designed with few keywords (25 in total) and no superfluous features. A Go program almost always reads the same way, regardless of its author: this is a design choice, not a lack of ambition.",
          },
        },
        {
          type: "text",
          text: {
            fr: "Trois idées à garder en tête pour la suite de ce parcours : Go privilégie la lisibilité à l'expressivité, il gère la concurrence comme une fonctionnalité de première classe (tu la découvriras dans un module dédié), et il impose un formatage de code unique via l'outil `gofmt`, ce qui met fin aux débats de style.",
            en: "Three ideas to keep in mind for the rest of this course: Go favors readability over expressiveness, it treats concurrency as a first-class feature (you'll discover it in a dedicated module), and it enforces a single code formatting style via the `gofmt` tool, which puts an end to style debates.",
          },
        },
      ],
    },
    {
      id: "installation-and-hello-world",
      slug: "installation-et-premier-programme",
      title: {
        fr: "Installation et premier programme",
        en: "Installation and first program",
      },
      summary: {
        fr: "Installer Go et exécuter ton tout premier programme.",
        en: "Install Go and run your very first program.",
      },
      sections: [
        {
          type: "text",
          text: {
            fr: "Rends-toi sur go.dev/dl pour télécharger l'installeur de ta plateforme (macOS, Windows, Linux). Une fois l'installation terminée, vérifie qu'elle a fonctionné en ouvrant un terminal.",
            en: "Head to go.dev/dl to download the installer for your platform (macOS, Windows, Linux). Once installation is done, verify it worked by opening a terminal.",
          },
        },
        {
          type: "code",
          code: "go version",
          caption: {
            fr: "Doit afficher quelque chose comme `go version go1.23.0 darwin/arm64`.",
            en: "Should print something like `go version go1.23.0 darwin/arm64`.",
          },
        },
        {
          type: "text",
          text: {
            fr: "Crée un dossier pour ce premier programme, puis un fichier `main.go` à l'intérieur.",
            en: "Create a folder for this first program, then a `main.go` file inside it.",
          },
        },
        {
          type: "code",
          code: 'package main\n\nimport "fmt"\n\nfunc main() {\n\tfmt.Println("Hello, Go!")\n}',
          caption: {
            fr: "Ton premier programme Go : il affiche un message dans le terminal.",
            en: "Your first Go program: it prints a message to the terminal.",
          },
        },
        {
          type: "text",
          text: {
            fr: "Deux façons de l'exécuter. `go run` compile et exécute en une seule commande, pratique pendant le développement. `go build` produit un binaire exécutable autonome que tu peux distribuer et lancer sans avoir Go installé.",
            en: "Two ways to run it. `go run` compiles and executes in a single command, handy during development. `go build` produces a standalone executable binary that you can distribute and run without Go installed.",
          },
        },
        {
          type: "code",
          code: "go run main.go\n# Hello, Go!\n\ngo build -o hello main.go\n./hello\n# Hello, Go!",
        },
        {
          type: "callout",
          variant: "tip",
          text: {
            fr: "Avant chaque commit, lance `gofmt -w .` (ou configure ton éditeur pour le faire à la sauvegarde) : c'est le formateur officiel, il n'y a rien à discuter dessus.",
            en: "Before every commit, run `gofmt -w .` (or configure your editor to do it on save): it's the official formatter, there's nothing to debate about it.",
          },
        },
      ],
      exercise: {
        prompt: {
          fr: "Modifie le programme pour qu'il affiche ton prénom après le message de bienvenue, sur une seconde ligne.",
          en: "Modify the program so it prints your first name after the greeting, on a second line.",
        },
        starterCode:
          'package main\n\nimport "fmt"\n\nfunc main() {\n\tfmt.Println("Hello, Go!")\n\t// ajoute une ligne ici\n}',
        solutionCode:
          'package main\n\nimport "fmt"\n\nfunc main() {\n\tfmt.Println("Hello, Go!")\n\tfmt.Println("Riadh")\n}',
        hint: {
          fr: "`fmt.Println` peut être appelée plusieurs fois : chaque appel affiche une nouvelle ligne.",
          en: "`fmt.Println` can be called multiple times: each call prints a new line.",
        },
        explanation: {
          fr: "Chaque appel à `fmt.Println` écrit sur la sortie standard et ajoute automatiquement un retour à la ligne à la fin, contrairement à `fmt.Print`.",
          en: "Each call to `fmt.Println` writes to standard output and automatically appends a newline at the end, unlike `fmt.Print`.",
        },
      },
    },
    {
      id: "anatomy-of-a-program",
      slug: "anatomie-dun-programme",
      title: {
        fr: "Anatomie d'un programme Go",
        en: "Anatomy of a Go program",
      },
      summary: {
        fr: "Comprendre chaque ligne du programme précédent, et découvrir go.mod.",
        en: "Understand every line of the previous program, and discover go.mod.",
      },
      sections: [
        {
          type: "text",
          text: {
            fr: "Reprenons le programme de la leçon précédente ligne par ligne.",
            en: "Let's revisit the previous program line by line.",
          },
        },
        {
          type: "code",
          code: 'package main\n\nimport "fmt"\n\nfunc main() {\n\tfmt.Println("Hello, Go!")\n}',
        },
        {
          type: "text",
          text: {
            fr: "`package main` déclare le paquet auquel appartient ce fichier. Le paquet `main` est spécial : c'est celui qui produit un exécutable (tout autre nom de paquet produit une bibliothèque). `import \"fmt\"` importe le paquet standard de formatage d'entrées-sorties, qui fournit `Println`, `Printf`, `Sprintf`, etc. `func main()` est le point d'entrée : dans un paquet `main`, cette fonction est appelée automatiquement au démarrage.",
            en: "`package main` declares the package this file belongs to. The `main` package is special: it's the one that produces an executable (any other package name produces a library). `import \"fmt\"` imports the standard formatted I/O package, which provides `Println`, `Printf`, `Sprintf`, and so on. `func main()` is the entry point: in a `main` package, this function is called automatically on startup.",
          },
        },
        {
          type: "callout",
          variant: "warning",
          text: {
            fr: "Go refuse de compiler un fichier qui importe un paquet non utilisé, ou qui déclare une variable locale jamais lue. Ce n'est pas un avertissement : c'est une erreur de compilation. Cette rigueur évite l'accumulation de code mort.",
            en: "Go refuses to compile a file that imports an unused package, or declares a local variable that is never read. This isn't a warning: it's a compile error. This strictness prevents dead code from piling up.",
          },
        },
        {
          type: "text",
          text: {
            fr: "Un projet Go réel est organisé autour d'un module, déclaré dans un fichier `go.mod` à la racine. Il définit le chemin d'import du module et la version de Go utilisée, et référence les dépendances externes.",
            en: "A real Go project is organized around a module, declared in a `go.mod` file at the root. It defines the module's import path and the Go version used, and references external dependencies.",
          },
        },
        {
          type: "code",
          code: "go mod init example.com/hello",
          caption: {
            fr: "Crée un fichier go.mod minimal pour démarrer un module.",
            en: "Creates a minimal go.mod file to start a module.",
          },
        },
        {
          type: "code",
          code: "module example.com/hello\n\ngo 1.23",
          caption: {
            fr: "Contenu généré : le chemin du module, puis la version de Go requise.",
            en: "Generated content: the module path, then the required Go version.",
          },
        },
      ],
      exercise: {
        prompt: {
          fr: "Sans exécuter de code : le fichier suivant compile-t-il ? Justifie.\n\npackage main\n\nimport (\n\t\"fmt\"\n\t\"os\"\n)\n\nfunc main() {\n\tfmt.Println(\"Hello\")\n}",
          en: "Without running any code: does the following file compile? Justify your answer.\n\npackage main\n\nimport (\n\t\"fmt\"\n\t\"os\"\n)\n\nfunc main() {\n\tfmt.Println(\"Hello\")\n}",
        },
        starterCode: "// Réfléchis avant de révéler la solution.",
        solutionCode:
          "// Non, il ne compile pas : le paquet \"os\" est importé mais jamais utilisé.\n// Il faudrait soit l'utiliser (par exemple os.Exit(0)), soit retirer l'import.",
        hint: {
          fr: "Repense à la règle sur les imports non utilisés.",
          en: "Think back to the rule about unused imports.",
        },
        explanation: {
          fr: "Go traite un import inutilisé comme une erreur de compilation, pas comme un simple avertissement. C'est vrai même si le paquet est standard comme `os`.",
          en: "Go treats an unused import as a compile error, not just a warning. This is true even for a standard package like `os`.",
        },
      },
    },
  ],
};

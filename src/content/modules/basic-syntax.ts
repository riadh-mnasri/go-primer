import type { Module } from "../types";

export const basicSyntax: Module = {
  id: "basic-syntax",
  slug: "basic-syntax",
  title: { fr: "Syntaxe de base", en: "Basic syntax" },
  description: {
    fr: "Variables, types, constantes et formatage de texte.",
    en: "Variables, types, constants, and text formatting.",
  },
  status: "available",
  lessons: [
    {
      id: "variables-and-types",
      slug: "variables-et-types",
      title: { fr: "Variables et types", en: "Variables and types" },
      summary: {
        fr: "Déclarer des variables et les types de base du langage.",
        en: "Declaring variables and the language's basic types.",
      },
      sections: [
        {
          type: "text",
          text: {
            fr: "Go propose deux façons de déclarer une variable. La forme explicite avec `var`, qui précise le type, et la forme courte `:=`, qui laisse le compilateur déduire le type à partir de la valeur assignée.",
            en: "Go offers two ways to declare a variable. The explicit form with `var`, which specifies the type, and the short form `:=`, which lets the compiler infer the type from the assigned value.",
          },
        },
        {
          type: "code",
          code: 'var name string = "Riadh"\nvar age int = 41\n\n// équivalent, plus idiomatique à l\'intérieur d\'une fonction\nname := "Riadh"\nage := 41',
        },
        {
          type: "callout",
          variant: "note",
          text: {
            fr: "`:=` ne fonctionne qu'à l'intérieur d'une fonction, pour déclarer ET initialiser en même temps. Au niveau paquet (hors fonction), seule la forme `var` est autorisée.",
            en: "`:=` only works inside a function, to declare AND initialize at the same time. At package level (outside a function), only the `var` form is allowed.",
          },
        },
        {
          type: "text",
          text: {
            fr: "Les types de base : `int` (entier signé, taille dépendant de la plateforme, 64 bits en pratique), `float64` (nombre à virgule flottante), `string` (chaîne de caractères UTF-8 immuable), `bool` (`true` ou `false`). Il existe aussi des variantes de taille explicite (`int32`, `int64`, `uint8`...) utiles quand la taille en mémoire compte.",
            en: "The basic types: `int` (signed integer, platform-dependent size, 64-bit in practice), `float64` (floating-point number), `string` (immutable UTF-8 string), `bool` (`true` or `false`). There are also explicit-size variants (`int32`, `int64`, `uint8`...) useful when memory size matters.",
          },
        },
        {
          type: "text",
          text: {
            fr: "Une variable déclarée sans valeur initiale reçoit automatiquement la valeur zéro de son type : `0` pour les nombres, `\"\"` pour les chaînes, `false` pour les booléens. Il n'existe pas de variable non initialisée en Go, contrairement à C.",
            en: "A variable declared without an initial value automatically gets the zero value for its type: `0` for numbers, `\"\"` for strings, `false` for booleans. There is no such thing as an uninitialized variable in Go, unlike C.",
          },
        },
        {
          type: "code",
          code: "var count int    // 0\nvar label string // \"\"\nvar ready bool   // false",
        },
      ],
      exercise: {
        prompt: {
          fr: "Déclare trois variables avec `:=` : `city` (une ville, string), `population` (un entier), `isCapital` (un booléen). Affiche-les avec `fmt.Println`.",
          en: "Declare three variables with `:=`: `city` (a city, string), `population` (an integer), `isCapital` (a boolean). Print them with `fmt.Println`.",
        },
        starterCode:
          "package main\n\nimport \"fmt\"\n\nfunc main() {\n\t// tes déclarations ici\n}",
        solutionCode:
          'package main\n\nimport "fmt"\n\nfunc main() {\n\tcity := "Paris"\n\tpopulation := 2148000\n\tisCapital := true\n\tfmt.Println(city, population, isCapital)\n}',
        hint: {
          fr: "`fmt.Println` accepte plusieurs arguments séparés par des virgules et les affiche séparés par des espaces.",
          en: "`fmt.Println` accepts several comma-separated arguments and prints them separated by spaces.",
        },
        explanation: {
          fr: "Le compilateur déduit `string`, `int` et `bool` uniquement à partir des valeurs littérales assignées : c'est tout l'intérêt du typage inféré de `:=`.",
          en: "The compiler infers `string`, `int`, and `bool` purely from the assigned literal values: that's the whole point of `:=`'s inferred typing.",
        },
      },
    },
    {
      id: "constants-and-operators",
      slug: "constantes-et-operateurs",
      title: {
        fr: "Constantes et opérateurs",
        en: "Constants and operators",
      },
      summary: {
        fr: "Valeurs immuables avec `const`, et les opérateurs arithmétiques, de comparaison et logiques.",
        en: "Immutable values with `const`, and arithmetic, comparison, and logical operators.",
      },
      sections: [
        {
          type: "text",
          text: {
            fr: "Une constante se déclare avec `const` et ne peut jamais être réassignée. Sa valeur doit pouvoir être calculée à la compilation : pas d'appel de fonction, pas de résultat qui dépend de l'exécution.",
            en: "A constant is declared with `const` and can never be reassigned. Its value must be computable at compile time: no function call, no result that depends on execution.",
          },
        },
        {
          type: "code",
          code: "const Pi = 3.14159\nconst MaxRetries = 3\nconst AppName = \"GoPrimer\"",
        },
        {
          type: "text",
          text: {
            fr: "Les opérateurs arithmétiques sont classiques : `+ - * / %`. Une subtilité importante : la division entre deux `int` donne un résultat entier, tronqué (pas arrondi).",
            en: "Arithmetic operators are the usual ones: `+ - * / %`. One important subtlety: division between two `int` values yields a truncated (not rounded) integer result.",
          },
        },
        {
          type: "code",
          code: "fmt.Println(7 / 2)   // 3, pas 3.5\nfmt.Println(7 % 2)   // 1 (reste de la division)\nfmt.Println(7.0 / 2) // 3.5, car les opérandes sont des float64",
        },
        {
          type: "text",
          text: {
            fr: "Les opérateurs de comparaison (`== != < > <= >=`) renvoient un `bool`. Les opérateurs logiques sont `&&` (et), `||` (ou) et `!` (non), avec évaluation court-circuit : `a() && b()` n'appelle `b()` que si `a()` renvoie `true`.",
            en: "Comparison operators (`== != < > <= >=`) return a `bool`. Logical operators are `&&` (and), `||` (or), and `!` (not), with short-circuit evaluation: `a() && b()` only calls `b()` if `a()` returns `true`.",
          },
        },
        {
          type: "callout",
          variant: "warning",
          text: {
            fr: "Go n'effectue aucune conversion implicite entre types numériques, même proches. `var x int32 = 1; var y int64 = 2; x + y` refuse de compiler : il faut convertir explicitement avec `int64(x) + y`.",
            en: "Go performs no implicit conversion between numeric types, even close ones. `var x int32 = 1; var y int64 = 2; x + y` refuses to compile: you must convert explicitly with `int64(x) + y`.",
          },
        },
      ],
      exercise: {
        prompt: {
          fr: "Déclare une constante `VatRate` à 0.20 (TVA à 20%). Calcule et affiche le prix TTC d'un article à 49.90 hors taxes.",
          en: "Declare a `VatRate` constant at 0.20 (20% VAT). Compute and print the tax-included price of a 49.90 pre-tax item.",
        },
        starterCode:
          "package main\n\nimport \"fmt\"\n\nfunc main() {\n\tconst VatRate = 0.20\n\tpriceExcludingTax := 49.90\n\t// calcule priceIncludingTax ici\n}",
        solutionCode:
          'package main\n\nimport "fmt"\n\nfunc main() {\n\tconst VatRate = 0.20\n\tpriceExcludingTax := 49.90\n\tpriceIncludingTax := priceExcludingTax * (1 + VatRate)\n\tfmt.Println(priceIncludingTax)\n}',
        hint: {
          fr: "Le prix TTC est le prix HT multiplié par (1 + le taux de TVA).",
          en: "The tax-included price is the pre-tax price multiplied by (1 + the VAT rate).",
        },
        explanation: {
          fr: "`VatRate` et `priceExcludingTax` sont tous deux des `float64` (déduits par le contexte), donc l'opération se fait sans conversion explicite.",
          en: "`VatRate` and `priceExcludingTax` are both `float64` (inferred from context), so the operation happens without explicit conversion.",
        },
      },
    },
    {
      id: "strings-and-formatting",
      slug: "chaines-et-formatage",
      title: {
        fr: "Chaînes de caractères et formatage",
        en: "Strings and formatting",
      },
      summary: {
        fr: "Manipuler du texte et maîtriser les verbes de fmt.Printf.",
        en: "Working with text and mastering fmt.Printf verbs.",
      },
      sections: [
        {
          type: "text",
          text: {
            fr: "Une `string` en Go est une séquence de octets encodée en UTF-8, immuable : on ne peut pas modifier un caractère en place, on construit toujours une nouvelle chaîne. La concaténation se fait avec `+`.",
            en: "A `string` in Go is an immutable sequence of UTF-8-encoded bytes: you cannot modify a character in place, you always build a new string. Concatenation is done with `+`.",
          },
        },
        {
          type: "code",
          code: 'firstName := "Ada"\nlastName := "Lovelace"\nfullName := firstName + " " + lastName\nfmt.Println(fullName) // Ada Lovelace',
        },
        {
          type: "text",
          text: {
            fr: "`fmt.Println` affiche des valeurs séparées par des espaces suivies d'un retour à la ligne. `fmt.Printf` (formaté) et `fmt.Sprintf` (retourne une string plutôt que d'afficher) utilisent des verbes commençant par `%` pour contrôler précisément la sortie.",
            en: "`fmt.Println` prints values separated by spaces followed by a newline. `fmt.Printf` (formatted) and `fmt.Sprintf` (returns a string instead of printing) use verbs starting with `%` to precisely control the output.",
          },
        },
        {
          type: "code",
          code: 'name := "Ada"\nage := 36\nfmt.Printf("%s a %d ans\\n", name, age)\n// Ada a 36 ans\n\nmessage := fmt.Sprintf("%s a %d ans", name, age)\n// message contient la chaîne, sans l\'afficher',
        },
        {
          type: "text",
          text: {
            fr: "Les verbes les plus utilisés : `%s` pour une chaîne, `%d` pour un entier, `%f` pour un nombre à virgule (`%.2f` pour deux décimales), `%t` pour un booléen, et `%v` qui affiche n'importe quelle valeur avec sa représentation par défaut. Ce dernier est très utile pour explorer une structure de données pendant le développement.",
            en: "The most-used verbs: `%s` for a string, `%d` for an integer, `%f` for a floating-point number (`%.2f` for two decimals), `%t` for a boolean, and `%v` which prints any value with its default representation. This last one is very handy for exploring a data structure during development.",
          },
        },
        {
          type: "callout",
          variant: "tip",
          text: {
            fr: "`go vet`, l'analyseur statique livré avec Go, détecte les incohérences entre les verbes utilisés dans `Printf` et les arguments fournis (par exemple `%d` sur une string). C'est une erreur fréquente qu'il vaut la peine de laisser l'outillage attraper pour toi.",
            en: "`go vet`, the static analyzer shipped with Go, catches mismatches between the verbs used in `Printf` and the arguments provided (for example `%d` on a string). It's a common mistake worth letting the tooling catch for you.",
          },
        },
      ],
      exercise: {
        prompt: {
          fr: "Avec `city := \"Paris\"` et `temperature := 18.4`, utilise `fmt.Printf` pour afficher : `Paris : 18.4°C` avec une seule décimale.",
          en: "With `city := \"Paris\"` and `temperature := 18.4`, use `fmt.Printf` to print: `Paris: 18.4°C` with a single decimal place.",
        },
        starterCode:
          'package main\n\nimport "fmt"\n\nfunc main() {\n\tcity := "Paris"\n\ttemperature := 18.4\n\t// ton Printf ici\n}',
        solutionCode:
          'package main\n\nimport "fmt"\n\nfunc main() {\n\tcity := "Paris"\n\ttemperature := 18.4\n\tfmt.Printf("%s : %.1f°C\\n", city, temperature)\n}',
        hint: {
          fr: "Le nombre de décimales se contrôle en insérant un point suivi du nombre de chiffres, entre `%` et `f`.",
          en: "The number of decimals is controlled by inserting a dot followed by the digit count, between `%` and `f`.",
        },
        explanation: {
          fr: "`%.1f` formate un `float64` avec exactement une décimale, en arrondissant si nécessaire.",
          en: "`%.1f` formats a `float64` with exactly one decimal, rounding if necessary.",
        },
      },
    },
  ],
};

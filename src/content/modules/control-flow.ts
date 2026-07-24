import type { Module } from "../types";

export const controlFlow: Module = {
  id: "control-flow",
  slug: "control-flow",
  title: { fr: "Structures de contrôle", en: "Control flow" },
  description: {
    fr: "if, la boucle for et switch : tout ce qu'il faut pour diriger l'exécution.",
    en: "if, the for loop, and switch: everything you need to direct execution.",
  },
  status: "available",
  lessons: [
    {
      id: "if-else",
      slug: "if-else",
      title: { fr: "if / else", en: "if / else" },
      summary: {
        fr: "La structure conditionnelle de Go, sans parenthèses autour de la condition.",
        en: "Go's conditional structure, with no parentheses around the condition.",
      },
      sections: [
        {
          type: "text",
          text: {
            fr: "La syntaxe de `if` ressemble à celle de C ou Java, à un détail près : les parenthèses autour de la condition sont interdites (pas juste optionnelles), et les accolades sont obligatoires même pour une seule instruction.",
            en: "The `if` syntax looks like C or Java, with one difference: parentheses around the condition are forbidden (not just optional), and braces are mandatory even for a single statement.",
          },
        },
        {
          type: "code",
          code: 'age := 20\n\nif age >= 18 {\n\tfmt.Println("Majeur")\n} else if age >= 13 {\n\tfmt.Println("Adolescent")\n} else {\n\tfmt.Println("Enfant")\n}',
        },
        {
          type: "text",
          text: {
            fr: "Particularité utile : `if` accepte une instruction d'initialisation avant la condition, séparée par un point-virgule. La variable ainsi déclarée n'existe que dans la portée du `if`/`else`, ce qui évite de polluer le reste de la fonction.",
            en: "A handy feature: `if` accepts an initialization statement before the condition, separated by a semicolon. The variable declared this way only exists within the scope of the `if`/`else`, which avoids polluting the rest of the function.",
          },
        },
        {
          type: "code",
          code: 'if age := computeAge(birthDate); age >= 18 {\n\tfmt.Println("Majeur")\n}\n// `age` n\'existe plus ici, en dehors du bloc if',
        },
        {
          type: "callout",
          variant: "note",
          text: {
            fr: "Ce motif `if valeur, err := faireQuelqueChose(); err != nil { ... }` revient constamment en Go, car c'est ainsi que le langage gère les erreurs (tu le retrouveras dans le module dédié à la gestion des erreurs).",
            en: "This `if value, err := doSomething(); err != nil { ... }` pattern comes up constantly in Go, because this is how the language handles errors (you'll see it again in the dedicated error-handling module).",
          },
        },
      ],
      exercise: {
        prompt: {
          fr: "Écris une fonction `describeTemperature(celsius float64) string` qui renvoie \"gel\" si <= 0, \"frais\" si <= 15, \"agréable\" si <= 25, sinon \"chaud\".",
          en: "Write a `describeTemperature(celsius float64) string` function that returns \"freezing\" if <= 0, \"cool\" if <= 15, \"pleasant\" if <= 25, otherwise \"hot\".",
        },
        starterCode:
          "func describeTemperature(celsius float64) string {\n\t// à compléter\n}",
        solutionCode:
          'func describeTemperature(celsius float64) string {\n\tif celsius <= 0 {\n\t\treturn "gel"\n\t} else if celsius <= 15 {\n\t\treturn "frais"\n\t} else if celsius <= 25 {\n\t\treturn "agréable"\n\t}\n\treturn "chaud"\n}',
        hint: {
          fr: "Une chaîne de `if / else if / else` suffit ; le dernier cas peut être un simple `return` final sans `else`.",
          en: "A chain of `if / else if / else` is enough; the last case can be a plain final `return` without `else`.",
        },
        explanation: {
          fr: "Comme `return` interrompt la fonction, le dernier `else` est inutile : un `return \"chaud\"` après le dernier `if` suffit et c'est le style généralement préféré en Go.",
          en: "Since `return` interrupts the function, the last `else` is unnecessary: a final `return \"chaud\"` after the last `if` is enough, and it's the generally preferred Go style.",
        },
      },
    },
    {
      id: "the-for-loop",
      slug: "la-boucle-for",
      title: { fr: "for, la seule boucle", en: "for, the only loop" },
      summary: {
        fr: "Go n'a qu'un seul mot-clé de boucle, avec quatre façons de l'utiliser.",
        en: "Go has only one looping keyword, with four ways to use it.",
      },
      sections: [
        {
          type: "text",
          text: {
            fr: "Contrairement à la plupart des langages, Go n'a ni `while` ni `do-while` : tout se fait avec `for`. La forme la plus proche d'un `for` classique en C ressemble à ceci.",
            en: "Unlike most languages, Go has neither `while` nor `do-while`: everything is done with `for`. The form closest to a classic C-style `for` looks like this.",
          },
        },
        {
          type: "code",
          code: 'for i := 0; i < 5; i++ {\n\tfmt.Println(i)\n}\n// affiche 0, 1, 2, 3, 4',
        },
        {
          type: "text",
          text: {
            fr: "En omettant l'initialisation et l'incrément, il ne reste qu'une condition : c'est l'équivalent d'un `while`.",
            en: "By omitting the initialization and the increment, only a condition remains: this is the equivalent of a `while`.",
          },
        },
        {
          type: "code",
          code: "count := 0\nfor count < 3 {\n\tfmt.Println(count)\n\tcount++\n}",
        },
        {
          type: "text",
          text: {
            fr: "Sans aucune condition, `for` boucle indéfiniment ; on en sort avec `break`. Et pour parcourir une collection (slice, tableau, map, string), on utilise `for ... range`, qui renvoie l'index et la valeur à chaque itération.",
            en: "With no condition at all, `for` loops forever; you exit it with `break`. And to iterate over a collection (slice, array, map, string), you use `for ... range`, which returns the index and the value at each iteration.",
          },
        },
        {
          type: "code",
          code: 'fruits := []string{"pomme", "poire", "kiwi"}\n\nfor index, fruit := range fruits {\n\tfmt.Println(index, fruit)\n}\n// 0 pomme\n// 1 poire\n// 2 kiwi\n\nfor {\n\tfmt.Println("boucle infinie")\n\tbreak // indispensable pour ne pas boucler éternellement\n}',
        },
        {
          type: "callout",
          variant: "tip",
          text: {
            fr: "Si tu n'as besoin que de la valeur, pas de l'index, remplace-le par `_` : `for _, fruit := range fruits`. Une variable déclarée et jamais lue est une erreur de compilation, même dans une boucle.",
            en: "If you only need the value, not the index, replace it with `_`: `for _, fruit := range fruits`. A declared-but-unread variable is a compile error, even inside a loop.",
          },
        },
      ],
      exercise: {
        prompt: {
          fr: "Écris une fonction `sum(numbers []int) int` qui additionne tous les éléments d'un slice d'entiers avec un `for range`.",
          en: "Write a `sum(numbers []int) int` function that adds up every element of an integer slice with a `for range`.",
        },
        starterCode: "func sum(numbers []int) int {\n\t// à compléter\n}",
        solutionCode:
          "func sum(numbers []int) int {\n\ttotal := 0\n\tfor _, n := range numbers {\n\t\ttotal += n\n\t}\n\treturn total\n}",
        hint: {
          fr: "Initialise un accumulateur à 0 avant la boucle, puis ajoute chaque valeur avec `+=`.",
          en: "Initialize an accumulator to 0 before the loop, then add each value with `+=`.",
        },
        explanation: {
          fr: "L'index n'est pas utile ici, donc on l'ignore avec `_` et on ne garde que la valeur de chaque élément.",
          en: "The index isn't needed here, so it's discarded with `_`, keeping only each element's value.",
        },
      },
    },
    {
      id: "switch",
      slug: "switch",
      title: { fr: "switch", en: "switch" },
      summary: {
        fr: "Une alternative lisible aux longues chaînes de if/else, sans piège du fallthrough.",
        en: "A readable alternative to long if/else chains, without the fallthrough trap.",
      },
      sections: [
        {
          type: "text",
          text: {
            fr: "Le `switch` de Go ressemble à celui d'autres langages, avec une différence majeure : chaque `case` s'arrête automatiquement après son exécution. Pas besoin de `break`, et pas de risque d'enchaîner accidentellement sur le cas suivant.",
            en: "Go's `switch` looks like other languages', with one major difference: each `case` automatically stops after executing. No `break` needed, and no risk of accidentally falling through to the next case.",
          },
        },
        {
          type: "code",
          code: 'day := "mercredi"\n\nswitch day {\ncase "samedi", "dimanche":\n\tfmt.Println("Week-end")\ndefault:\n\tfmt.Println("Jour de semaine")\n}\n// affiche "Jour de semaine"',
        },
        {
          type: "text",
          text: {
            fr: "Un `case` peut regrouper plusieurs valeurs séparées par des virgules, comme ci-dessus pour \"samedi\" et \"dimanche\". Si tu as vraiment besoin de l'ancien comportement de `fallthrough` (continuer sur le cas suivant), le mot-clé `fallthrough` existe, mais il est rarement utilisé.",
            en: "A `case` can group several comma-separated values, as above for \"samedi\" and \"dimanche\". If you genuinely need the old fallthrough behavior (continue into the next case), the `fallthrough` keyword exists, but it's rarely used.",
          },
        },
        {
          type: "text",
          text: {
            fr: "`switch` sans expression après le mot-clé se comporte comme un `if/else if` plus lisible : chaque `case` contient sa propre condition booléenne.",
            en: "A `switch` with no expression after the keyword behaves like a more readable `if/else if`: each `case` holds its own boolean condition.",
          },
        },
        {
          type: "code",
          code: 'score := 82\n\nswitch {\ncase score >= 90:\n\tfmt.Println("A")\ncase score >= 75:\n\tfmt.Println("B")\ncase score >= 60:\n\tfmt.Println("C")\ndefault:\n\tfmt.Println("D")\n}\n// affiche "B"',
        },
        {
          type: "callout",
          variant: "note",
          text: {
            fr: "Il existe aussi le \"type switch\" (`switch v := x.(type)`), qui teste le type dynamique d'une interface. Il sera présenté dans le module sur les interfaces, une fois que la notion aura du sens.",
            en: "There's also the \"type switch\" (`switch v := x.(type)`), which tests the dynamic type of an interface. It will be introduced in the interfaces module, once the concept makes sense.",
          },
        },
      ],
      exercise: {
        prompt: {
          fr: "Écris une fonction `season(month int) string` (mois de 1 à 12) qui renvoie \"hiver\", \"printemps\", \"été\" ou \"automne\" avec un `switch` sans expression.",
          en: "Write a `season(month int) string` function (month 1 to 12) that returns \"winter\", \"spring\", \"summer\", or \"fall\" using an expressionless `switch`.",
        },
        starterCode: "func season(month int) string {\n\t// à compléter\n}",
        solutionCode:
          'func season(month int) string {\n\tswitch {\n\tcase month == 12, month == 1, month == 2:\n\t\treturn "hiver"\n\tcase month >= 3 && month <= 5:\n\t\treturn "printemps"\n\tcase month >= 6 && month <= 8:\n\t\treturn "été"\n\tdefault:\n\t\treturn "automne"\n\t}\n}',
        hint: {
          fr: "Un `case` peut combiner plusieurs valeurs avec des virgules, ou une expression booléenne complète avec `&&`.",
          en: "A `case` can combine several comma-separated values, or a full boolean expression with `&&`.",
        },
        explanation: {
          fr: "Le `switch` sans expression évalue chaque `case` comme une condition indépendante, dans l'ordre, et s'arrête au premier qui est vrai.",
          en: "An expressionless `switch` evaluates each `case` as an independent condition, in order, and stops at the first one that's true.",
        },
      },
    },
  ],
};

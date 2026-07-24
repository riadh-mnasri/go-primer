import type { Module } from "../types";

const planned: Array<Pick<Module, "id" | "slug" | "title" | "description">> =
  [
    {
      id: "functions",
      slug: "functions",
      title: { fr: "Fonctions", en: "Functions" },
      description: {
        fr: "Retours multiples, valeurs nommées, variadic et closures.",
        en: "Multiple returns, named results, variadic parameters, and closures.",
      },
    },
    {
      id: "collections",
      slug: "collections",
      title: { fr: "Tableaux, slices et maps", en: "Arrays, slices, and maps" },
      description: {
        fr: "Les structures de données au cœur de la plupart des programmes Go.",
        en: "The data structures at the heart of most Go programs.",
      },
    },
    {
      id: "structs-and-methods",
      slug: "structs-and-methods",
      title: { fr: "Structs et méthodes", en: "Structs and methods" },
      description: {
        fr: "Définir tes propres types de données et leur associer des comportements.",
        en: "Defining your own data types and attaching behavior to them.",
      },
    },
    {
      id: "interfaces",
      slug: "interfaces",
      title: { fr: "Interfaces", en: "Interfaces" },
      description: {
        fr: "Le polymorphisme à la Go : implicite, minimal, et très puissant.",
        en: "Polymorphism the Go way: implicit, minimal, and very powerful.",
      },
    },
    {
      id: "error-handling",
      slug: "error-handling",
      title: { fr: "Gestion des erreurs", en: "Error handling" },
      description: {
        fr: "Pourquoi Go n'a pas d'exceptions, et comment gérer les erreurs proprement.",
        en: "Why Go has no exceptions, and how to handle errors cleanly.",
      },
    },
    {
      id: "pointers",
      slug: "pointers",
      title: { fr: "Pointeurs", en: "Pointers" },
      description: {
        fr: "Comprendre le passage par valeur et par référence sans magie noire.",
        en: "Understanding pass-by-value and pass-by-reference without black magic.",
      },
    },
    {
      id: "packages-and-modules",
      slug: "packages-and-modules",
      title: { fr: "Paquets et modules", en: "Packages and modules" },
      description: {
        fr: "Organiser un projet Go et gérer ses dépendances.",
        en: "Organizing a Go project and managing its dependencies.",
      },
    },
    {
      id: "concurrency",
      slug: "concurrency",
      title: { fr: "Goroutines et channels", en: "Goroutines and channels" },
      description: {
        fr: "La marque de fabrique de Go : la concurrence comme fonctionnalité native.",
        en: "Go's signature feature: concurrency as a native capability.",
      },
    },
    {
      id: "testing",
      slug: "testing",
      title: { fr: "Tests", en: "Testing" },
      description: {
        fr: "Le paquet testing intégré, sans framework externe nécessaire.",
        en: "The built-in testing package, no external framework required.",
      },
    },
    {
      id: "idiomatic-go",
      slug: "idiomatic-go",
      title: { fr: "Go idiomatique", en: "Idiomatic Go" },
      description: {
        fr: "Les conventions et réflexes qui distinguent du code Go qui \"a l'air d'aller\".",
        en: "The conventions and instincts that set apart Go code that \"looks right\".",
      },
    },
  ];

export const plannedModules: Module[] = planned.map((module) => ({
  ...module,
  status: "planned",
  lessons: [],
}));

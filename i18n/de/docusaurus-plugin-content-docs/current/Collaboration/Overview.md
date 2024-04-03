---
title: Overview
description: Overview description
---

# Übersicht

# h1 Überschrift 8-)
## h2 Überschrift
### h3 Überschrift
#### h4 Überschrift
##### h5 Überschrift
###### h6 Überschrift


## Horizontale Regelungen

___

---

***


## Typografische Anpassungen

Aktivieren Sie die Option Typograf, um das Ergebnis zu sehen.

(c) (C) (r) (R) (tm) (TM) (p) (P) +-

test.. test... test..... test?..... test!....

!!!!!! ???? ,,  -- ---

"Smartypants, doppelte Anführungszeichen" und 'einfache Anführungszeichen'


## Hervorhebung

**Dies ist fetter Text**

__Dies ist fetter Text__

*Das ist kursiver Text*

_Das ist kursiver Text_

~~Durchgestrichen~~


## Blockzitate


> Blockquotes können auch verschachtelt werden...
>> ...indem man zusätzliche Größer-als-Zeichen direkt nebeneinander verwendet...
> > > ...oder mit Leerzeichen zwischen den Pfeilen.


## Listen

Unsortierte Liste

+ Erstellen Sie eine Liste, indem Sie eine Zeile mit `+`, `-` oder `*` beginnen.
+ Unterlisten werden durch Einrücken von 2 Leerzeichen erstellt:
  - Markierungszeichenwechsel erzwingt neuen Listenanfang:
    * Ac tristique libero volutpat at
    + Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit
+ Sehr einfach!

Sortierte Liste

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa


1. Sie können fortlaufende Nummern verwenden...
1. ...oder alle Zahlen als `1.` beibehalten

Nummerierung mit Offset beginnen:

57. foo
1. bar


## Code

Eingezogener `Code`

Eingerückter Code

    // Einige Kommentare
    Zeile 1 des Codes
    Zeile 2 des Codes
    Zeile 3 des Codes


Blockcode "Zäune"

```
Beispieltext hier...
```

Hervorhebung der Syntax

``` js
var foo = function (bar) {
  return bar++;
};

console.log(foo(5));
```

## Tabellen

| Option | Beschreibung |
| ------ | ------------ |
| data | Pfad zu Datendateien, um die Daten zu liefern, die an Vorlagen übergeben werden. |
| engine | Engine, die für die Verarbeitung von Vorlagen verwendet werden soll. Handlebars ist die Standardeinstellung. |
| ext | Erweiterung, die für dest-Dateien verwendet werden soll. |

Rechts ausgerichtete Spalten

| Option | Beschreibung |
| ------:| ------------:|
| data | Pfad zu Datendateien, um die Daten zu liefern, die an Vorlagen übergeben werden. |
| Engine | Engine, die für die Verarbeitung von Vorlagen verwendet werden soll. Handlebars ist die Standardeinstellung. |
| ext | Erweiterung, die für dest-Dateien verwendet werden soll. |


## Links

[link text](http://dev.nodeca.com)

[link with title](http://nodeca.github.io/pica/demo/ "title text!")

Autokonvertierter Link https://github.com/nodeca/pica (aktivieren Sie linkify um zu sehen)


## Images

![Minion](https://octodex.github.com/images/minion.png)
![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat")

Wie bei Links gibt es auch bei Bildern eine Fußnoten-Syntax

![Alt text][id]

Mit einem Verweis auf eine spätere Stelle im Dokument, die die URL angibt:

[id]: https://octodex.github.com/images/dojocat.jpg  "The Dojocat"

In-Ordner-Bilder im Unterordner assets

![Example banner](./assets/test_image.png)


## Plugins

Das Hauptmerkmal von `markdown-it` ist die sehr effektive Unterstützung von
[syntax plugins](https://www.npmjs.org/browse/keyword/markdown-it-plugin).


### [Emojies](https://github.com/markdown-it/markdown-it-emoji)

> Classic markup: :wink: :cry: :laughing: :yum:
>
> Shortcuts (emoticons): :-) :-( 8-) ;)

see [how to change output](https://github.com/markdown-it/markdown-it-emoji#change-output) with twemoji.


### [Subscript](https://github.com/markdown-it/markdown-it-sub) / [Superscript](https://github.com/markdown-it/markdown-it-sup)

- 19^th^
- H~2~O


### [\<ins>](https://github.com/markdown-it/markdown-it-ins)

++Eingefügter Text++


### [\<mark>](https://github.com/markdown-it/markdown-it-mark)

==Markierter Text==


### [Fußnoten](https://github.com/markdown-it/markdown-it-footnote)

Fußnote 1 link[^erste].

Fußnote 2 link[^zweite].

Inline-Fußnote^[Text der Inline-Fußnote] Definition.

Duplizierte Fußnotenreferenz[^zweite].

[^erste]: Fußnote **kann Markup** haben

    und mehrere Absätze haben.

[^zweite]: Fußnotentext.


### [Definitionslisten](https://github.com/markdown-it/markdown-it-deflist)

Begriff 1

:   Definition 1
mit faulem Fortsetzungssatz.

_Kompakter Stil:_

Begriff 1
  ~ Definition 1

Begriff 2
  ~ Definition 2a
  ~ Definition 2b


### [Abkürzungen](https://github.com/markdown-it/markdown-it-abbr)

Dies ist ein Beispiel für HTML-Abkürzungen.

Es wandelt "HTML" um, behält aber Teileinträge wie "xxxHTMLyyy" und so weiter bei.

*[HTML]: Hyper Text Markup Language

### [Benutzerdefinierte Container](https://github.com/markdown-it/markdown-it-container)

::: Warnung
*Hier sind die Drachen*
:::

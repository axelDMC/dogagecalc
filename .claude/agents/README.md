# 🏭 Micro-SaaS Factory — Agentes para Claude Code

## Agentes

| Agente | Modelo | Tools | Costo est. |
|--------|--------|-------|------------|
| **explore** | **Haiku** (barato) | Read, Glob, Grep, **WebSearch**, **WebFetch** | ~$0.01 |
| **architect** | **Sonnet** (medio) | Read, Write, Glob, Grep | ~$0.03 |
| **build** | **Sonnet** (medio) | Read, Write, Edit, Bash, Glob, Grep | ~$0.15-0.20 |
| **qa** | **Haiku** (barato) | Read, Bash, Glob, Grep, Edit | ~$0.01 |
| **launch** | **Haiku** (barato) | Read, Glob, Grep | ~$0.01 |
| **factory** | **Sonnet** (medio) | Todos + **Task** | ~$0.20-0.25 |

**Costo total por proyecto: ~$0.25-0.30** (vs ~$1+ si todo fuera Sonnet)

---

## Cómo Invocar los Agentes

Los agentes **NO** se invocan con `/`. Se invocan así:

### Forma principal — Lenguaje natural
```
Lanza el agente explore
```
```
Lanza el agente architect con esta idea: [pegar idea]
```
```
Lanza el agente build para el proyecto [nombre del proyecto]
```
```
Lanza el agente qa
```
```
Lanza el agente launch
```
```
Lanza el agente factory
```

También funciona en inglés:
```
Launch the agent explore
```

---

## Instalación

### Paso 1: Crear la carpeta de agentes
```powershell
cd C:\Users\axel1\projects\micro-saas-template
mkdir .claude\agents
```

### Paso 2: Copiar los 6 archivos .md a `.claude\agents\`
```powershell
copy [ruta-de-descarga]\explore.md .claude\agents\
copy [ruta-de-descarga]\architect.md .claude\agents\
copy [ruta-de-descarga]\build.md .claude\agents\
copy [ruta-de-descarga]\qa.md .claude\agents\
copy [ruta-de-descarga]\launch.md .claude\agents\
copy [ruta-de-descarga]\factory.md .claude\agents\
```

### Paso 3: (Opcional) Instalar global para usar desde cualquier carpeta
```powershell
mkdir $HOME\.claude\agents
copy C:\Users\axel1\projects\micro-saas-template\.claude\agents\*.md $HOME\.claude\agents\
```

### Paso 4: Commit y push al template
```powershell
git add .claude\agents\
git commit -m "add factory agents"
git push
```

### Paso 5: Colocar el Excel
```
C:\Users\axel1\projects\
├── saas-factory.xlsx          ← aquí (o el agente lo crea la primera vez)
├── micro-saas-template\
├── socialsizer\               ← (futuro)
```

> **Nota**: Si es la primera vez y no tienes Excel, el agente `explore`
> creará automáticamente los archivos CSV de tracking al ejecutarse.

---

## Uso Diario

### Opción A: Pipeline completo
```powershell
cd C:\Users\axel1\projects
claude --dangerously-skip-permissions
```
```
Lanza el agente factory
```
Ejecuta los 5 agentes en secuencia pidiendo confirmación entre pasos.

### Opción B: Paso a paso (más control)
```powershell
cd C:\Users\axel1\projects
claude --dangerously-skip-permissions
```
```
Lanza el agente explore
```
(eliges idea 1, 2 o 3)
```
Lanza el agente architect con esta idea: [pegar idea elegida]
```
(revisas los 3 bloques)
```
Lanza el agente build para el proyecto socialsizer
```
(esperas a que construya)
```
Lanza el agente qa
```
(verifica y corrige)
```
Lanza el agente launch
```
(genera copy de distribución)

### Deploy después del pipeline
```powershell
cd socialsizer
git add .
git commit -m "MVP v1"
git push
```
Luego en Cloudflare Dashboard → Pages → Connect to Git → Deploy.

---

## Modelos por Agente

```
explore   ──→ Haiku   (buscar + filtrar = tarea simple, barato)
architect ──→ Sonnet  (generar specs = necesita razonamiento)
build     ──→ Sonnet  (escribir código = necesita calidad)
qa        ──→ Haiku   (checklist + grep = tarea simple, barato)
launch    ──→ Haiku   (generar copy = tarea simple, barato)
factory   ──→ Sonnet  (orquestar = coordina todo con Task tool)
```

Haiku es ~10x más barato que Sonnet. Al usar Haiku para 3 de 5 agentes,
el costo total baja ~60%.

---

## Estructura de Archivos

```
C:\Users\axel1\.claude\agents\        ← agentes globales
├── explore.md
├── architect.md
├── build.md
├── qa.md
├── launch.md
└── factory.md

C:\Users\axel1\projects\
├── saas-factory-projects.csv          ← tracker (creado por explore)
├── saas-factory-backlog.csv           ← ideas pendientes
├── saas-factory-rejected.csv          ← ideas rechazadas
├── saas-factory-sources.csv           ← historial de búsquedas
├── micro-saas-template\               ← boilerplate (NUNCA tocar)
├── socialsizer\                       ← proyecto 1
├── nettoolbox\                        ← proyecto 2
└── ...
```

---

## Primera Vez (sin Excel ni proyectos)

```powershell
cd C:\Users\axel1\projects
claude --dangerously-skip-permissions
```
```
Lanza el agente explore
```

El agente:
1. No encuentra CSVs → **los crea automáticamente** con headers vacíos
2. Busca en la web con WebSearch
3. Valida la competencia
4. Propone 3 ideas
5. Te da los datos listos para copiar al CSV

---

## Notas
- Los agentes son archivos `.md` en `.claude/agents/`
- Se invocan con: `Lanza el agente [nombre]`
- **NO** se invocan con `/nombre` (eso es para skills/slash commands)
- Se cargan al iniciar la sesión de Claude Code
- Si agregas un agente nuevo, reinicia la sesión para que lo detecte
- Para editar un agente: modifica su `.md` y reinicia la sesión
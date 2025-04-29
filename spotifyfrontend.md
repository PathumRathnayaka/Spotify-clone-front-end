This file is a merged representation of the entire codebase, combined into a single document by Repomix.

# File Summary

## Purpose
This file contains a packed representation of the entire repository's contents.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.

## File Format
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Multiple file entries, each consisting of:
  a. A header with the file path (## File: path/to/file)
  b. The full contents of the file in a code block

## Usage Guidelines
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.

## Notes
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Files are sorted by Git change count (files with more changes are at the bottom)

## Additional Info

# Directory Structure
```
.gitignore
.repomixignore
components.json
eslint.config.js
index.html
LICENSE
package.json
public/vite.svg
README.md
repomix.config.json
src/App.tsx
src/App.tsx~
src/components/SignInOAuthButtons.tsx
src/components/skeletons/FeaturedGridSkeleton.tsx
src/components/skeletons/PlaylistSkeleton.tsx
src/components/skeletons/UsersListSkeleton.tsx
src/components/TopBar.tsx
src/components/ui/avatar.tsx
src/components/ui/button.tsx
src/components/ui/card.tsx
src/components/ui/dialog.tsx
src/components/ui/input.tsx
src/components/ui/resizable.tsx
src/components/ui/scroll-area.tsx
src/components/ui/select.tsx
src/components/ui/slider.tsx
src/components/ui/table.tsx
src/components/ui/tabs.tsx
src/index.css
src/layout/component/AudioPlayer.tsx
src/layout/component/FriendsActivity.tsx
src/layout/component/LeftSidebar.tsx
src/layout/component/PlaybackControls.tsx
src/layout/MainLayout.tsx
src/lib/axios.ts
src/lib/utils.ts
src/main.tsx
src/pages/404/NotFoundPage.tsx
src/pages/admin/AdminPage.tsx
src/pages/admin/AdminPage.tsx~
src/pages/admin/components/AddAlbumDialog.tsx
src/pages/admin/components/AddSongDialog.tsx
src/pages/admin/components/AlbumsTable.tsx
src/pages/admin/components/AlbumTabContent.tsx
src/pages/admin/components/DashboardStats.tsx
src/pages/admin/components/DashboardStats.tsx~
src/pages/admin/components/Header.tsx
src/pages/admin/components/SongsTable.tsx
src/pages/admin/components/SongTabContent.tsx
src/pages/admin/components/StatsCard.tsx
src/pages/admin/components/StatsCard.tsx~
src/pages/album/AlbumPage.tsx
src/pages/auth-callback/AuthCallBackPage.tsx
src/pages/chat/ChatPage.tsx
src/pages/chat/components/ChatHeader.tsx
src/pages/chat/components/MessageInput.tsx
src/pages/chat/components/UsersList.tsx
src/pages/home/component/FeaturedSection.tsx
src/pages/home/component/PlayButton.tsx
src/pages/home/component/SectionGrid.tsx
src/pages/home/component/SectionGridSkeleton.tsx
src/pages/home/HomePage.tsx
src/provider/AuthProvider.tsx
src/stores/useAuthStore.ts
src/stores/useChatStore.ts
src/stores/useMusicStore.ts
src/stores/usePlayerStore.ts
src/stores/usePlayerStore.ts~
src/types/index.ts
src/vite-env.d.ts
tsconfig.app.json
tsconfig.json
tsconfig.node.json
vite.config.ts
```

# Files

## File: .repomixignore
````
# Add patterns to ignore here, one per line
# Example:
# *.log
# tmp/
````

## File: repomix.config.json
````json
{
  "output": {
    "filePath": "spotifyfrontend.md",
    "style": "markdown",
    "parsableStyle": false,
    "fileSummary": true,
    "directoryStructure": true,
    "removeComments": false,
    "removeEmptyLines": false,
    "compress": false,
    "topFilesLength": 5,
    "showLineNumbers": false,
    "copyToClipboard": false,
    "git": {
      "sortByChanges": true,
      "sortByChangesMaxCommits": 100
    }
  },
  "include": [],
  "ignore": {
    "useGitignore": true,
    "useDefaultPatterns": true,
    "customPatterns": []
  },
  "security": {
    "enableSecurityCheck": true
  },
  "tokenCount": {
    "encoding": "o200k_base"
  }
}
````

## File: components.json
````json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": false,
  "tsx": true,
  "tailwind": {
    "config": "",
    "css": "src/index.css",
    "baseColor": "neutral",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  },
  "iconLibrary": "lucide"
}
````

## File: eslint.config.js
````javascript
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
)
````

## File: LICENSE
````
MIT License

Copyright (c) 2025 Pathum Rathnayaka

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
````

## File: public/vite.svg
````
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--logos" width="31.88" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 257"><defs><linearGradient id="IconifyId1813088fe1fbc01fb466" x1="-.828%" x2="57.636%" y1="7.652%" y2="78.411%"><stop offset="0%" stop-color="#41D1FF"></stop><stop offset="100%" stop-color="#BD34FE"></stop></linearGradient><linearGradient id="IconifyId1813088fe1fbc01fb467" x1="43.376%" x2="50.316%" y1="2.242%" y2="89.03%"><stop offset="0%" stop-color="#FFEA83"></stop><stop offset="8.333%" stop-color="#FFDD35"></stop><stop offset="100%" stop-color="#FFA800"></stop></linearGradient></defs><path fill="url(#IconifyId1813088fe1fbc01fb466)" d="M255.153 37.938L134.897 252.976c-2.483 4.44-8.862 4.466-11.382.048L.875 37.958c-2.746-4.814 1.371-10.646 6.827-9.67l120.385 21.517a6.537 6.537 0 0 0 2.322-.004l117.867-21.483c5.438-.991 9.574 4.796 6.877 9.62Z"></path><path fill="url(#IconifyId1813088fe1fbc01fb467)" d="M185.432.063L96.44 17.501a3.268 3.268 0 0 0-2.634 3.014l-5.474 92.456a3.268 3.268 0 0 0 3.997 3.378l24.777-5.718c2.318-.535 4.413 1.507 3.936 3.838l-7.361 36.047c-.495 2.426 1.782 4.5 4.151 3.78l15.304-4.649c2.372-.72 4.652 1.36 4.15 3.788l-11.698 56.621c-.732 3.542 3.979 5.473 5.943 2.437l1.313-2.028l72.516-144.72c1.215-2.423-.88-5.186-3.54-4.672l-25.505 4.922c-2.396.462-4.435-1.77-3.759-4.114l16.646-57.705c.677-2.35-1.37-4.583-3.769-4.113Z"></path></svg>
````

## File: src/App.tsx~
````
import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/home/HomePage"
import AuthCallBackPage from "./pages/auth-callback/AuthCallBackPage"
import { AuthenticateWithRedirectCallback } from "@clerk/clerk-react"
import MainLayout from "./layout/MainLayout"
import ChatPage from "./pages/chat/ChatPage"
import AlbumPage from "./pages/album/AlbumPage"

function App() {
  
  return (
    <>
    <Routes>
      
      <Route path="/sso-callback" element={<AuthenticateWithRedirectCallback signUpForceRedirectUrl={"/auth-callback"}/>}/>
      <Route path="/auth-callback" element={<AuthCallBackPage/>}/>
      <Route path="/admin" element={<AuthCallBackPage/>}/>
      <Route element={<MainLayout/>}>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/chat" element={<ChatPage/>}/>
      <Route path="/albums/:albumId" element={<AlbumPage/>}/>
      </Route>
    </Routes>
    </>
  )
}

export default App
````

## File: src/components/skeletons/FeaturedGridSkeleton.tsx
````typescript
const FeaturedGridSkeleton = () => {
	return (
		<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8'>
			{Array.from({ length: 6 }).map((_, i) => (
				<div key={i} className='flex items-center bg-zinc-800/50 rounded-md overflow-hidden animate-pulse'>
					<div className='w-16 sm:w-20 h-16 sm:h-20 bg-zinc-700 flex-shrink-0' />
					<div className='flex-1 p-4'>
						<div className='h-4 bg-zinc-700 rounded w-3/4 mb-2' />
					</div>
				</div>
			))}
		</div>
	);
};
export default FeaturedGridSkeleton;
````

## File: src/components/skeletons/PlaylistSkeleton.tsx
````typescript
const PlaylistSkeleton = () => {
	return Array.from({ length: 7 }).map((_, i) => (
		<div key={i} className='p-2 rounded-md flex items-center gap-3'>
			<div className='w-12 h-12 bg-zinc-800 rounded-md flex-shrink-0 animate-pulse' />
			<div className='flex-1 min-w-0 hidden md:block space-y-2'>
				<div className='h-4 bg-zinc-800 rounded animate-pulse w-3/4' />
				<div className='h-3 bg-zinc-800 rounded animate-pulse w-1/2' />
			</div>
		</div>
	));
};
export default PlaylistSkeleton;
````

## File: src/components/skeletons/UsersListSkeleton.tsx
````typescript
const UsersListSkeleton = () => {
	return Array.from({ length: 4 }).map((_, i) => (
		<div key={i} className='flex items-center justify-center lg:justify-start gap-3 p-3 rounded-lg animate-pulse'>
			<div className='h-12 w-12 rounded-full bg-zinc-800' />
			<div className='flex-1 lg:block hidden'>
				<div className='h-4 w-24 bg-zinc-800 rounded mb-2' />
				<div className='h-3 w-32 bg-zinc-800 rounded' />
			</div>
		</div>
	));
};
export default UsersListSkeleton;
````

## File: src/components/ui/avatar.tsx
````typescript
import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"

import { cn } from "@/lib/utils"

function Avatar({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Root>) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      className={cn(
        "relative flex size-8 shrink-0 overflow-hidden rounded-full",
        className
      )}
      {...props}
    />
  )
}

function AvatarImage({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Image>) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn("aspect-square size-full", className)}
      {...props}
    />
  )
}

function AvatarFallback({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Fallback>) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(
        "bg-muted flex size-full items-center justify-center rounded-full",
        className
      )}
      {...props}
    />
  )
}

export { Avatar, AvatarImage, AvatarFallback }
````

## File: src/components/ui/button.tsx
````typescript
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40",
        outline:
          "border border-input bg-background shadow-xs hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
````

## File: src/components/ui/card.tsx
````typescript
import * as React from "react"

import { cn } from "@/lib/utils"

function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card"
      className={cn(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
        className
      )}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn("flex flex-col gap-1.5 px-6", className)}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn("leading-none font-semibold", className)}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-6", className)}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center px-6", className)}
      {...props}
    />
  )
}

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
````

## File: src/components/ui/dialog.tsx
````typescript
import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { XIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function Dialog({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Root>) {
  return <DialogPrimitive.Root data-slot="dialog" {...props} />
}

function DialogTrigger({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Trigger>) {
  return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />
}

function DialogPortal({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Portal>) {
  return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />
}

function DialogClose({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Close>) {
  return <DialogPrimitive.Close data-slot="dialog-close" {...props} />
}

function DialogOverlay({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Overlay>) {
  return (
    <DialogPrimitive.Overlay
      data-slot="dialog-overlay"
      className={cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      )}
      {...props}
    />
  )
}

function DialogContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Content>) {
  return (
    <DialogPortal data-slot="dialog-portal">
      <DialogOverlay />
      <DialogPrimitive.Content
        data-slot="dialog-content"
        className={cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
          className
        )}
        {...props}
      >
        {children}
        <DialogPrimitive.Close className="ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4">
          <XIcon />
          <span className="sr-only">Close</span>
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPortal>
  )
}

function DialogHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-header"
      className={cn("flex flex-col gap-2 text-center sm:text-left", className)}
      {...props}
    />
  )
}

function DialogFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-footer"
      className={cn(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        className
      )}
      {...props}
    />
  )
}

function DialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Title>) {
  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      className={cn("text-lg leading-none font-semibold", className)}
      {...props}
    />
  )
}

function DialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Description>) {
  return (
    <DialogPrimitive.Description
      data-slot="dialog-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  )
}

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
}
````

## File: src/components/ui/input.tsx
````typescript
import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      )}
      {...props}
    />
  )
}

export { Input }
````

## File: src/components/ui/resizable.tsx
````typescript
import * as React from "react"
import { GripVerticalIcon } from "lucide-react"
import * as ResizablePrimitive from "react-resizable-panels"

import { cn } from "@/lib/utils"

function ResizablePanelGroup({
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelGroup>) {
  return (
    <ResizablePrimitive.PanelGroup
      data-slot="resizable-panel-group"
      className={cn(
        "flex h-full w-full data-[panel-group-direction=vertical]:flex-col",
        className
      )}
      {...props}
    />
  )
}

function ResizablePanel({
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.Panel>) {
  return <ResizablePrimitive.Panel data-slot="resizable-panel" {...props} />
}

function ResizableHandle({
  withHandle,
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelResizeHandle> & {
  withHandle?: boolean
}) {
  return (
    <ResizablePrimitive.PanelResizeHandle
      data-slot="resizable-handle"
      className={cn(
        "bg-border focus-visible:ring-ring relative flex w-px items-center justify-center after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:ring-1 focus-visible:ring-offset-1 focus-visible:outline-hidden data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90",
        className
      )}
      {...props}
    >
      {withHandle && (
        <div className="bg-border z-10 flex h-4 w-3 items-center justify-center rounded-xs border">
          <GripVerticalIcon className="size-2.5" />
        </div>
      )}
    </ResizablePrimitive.PanelResizeHandle>
  )
}

export { ResizablePanelGroup, ResizablePanel, ResizableHandle }
````

## File: src/components/ui/scroll-area.tsx
````typescript
import * as React from "react"
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area"

import { cn } from "@/lib/utils"

function ScrollArea({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ScrollAreaPrimitive.Root>) {
  return (
    <ScrollAreaPrimitive.Root
      data-slot="scroll-area"
      className={cn("relative", className)}
      {...props}
    >
      <ScrollAreaPrimitive.Viewport
        data-slot="scroll-area-viewport"
        className="ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] focus-visible:ring-4 focus-visible:outline-1"
      >
        {children}
      </ScrollAreaPrimitive.Viewport>
      <ScrollBar />
      <ScrollAreaPrimitive.Corner />
    </ScrollAreaPrimitive.Root>
  )
}

function ScrollBar({
  className,
  orientation = "vertical",
  ...props
}: React.ComponentProps<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>) {
  return (
    <ScrollAreaPrimitive.ScrollAreaScrollbar
      data-slot="scroll-area-scrollbar"
      orientation={orientation}
      className={cn(
        "flex touch-none p-px transition-colors select-none",
        orientation === "vertical" &&
          "h-full w-2.5 border-l border-l-transparent",
        orientation === "horizontal" &&
          "h-2.5 flex-col border-t border-t-transparent",
        className
      )}
      {...props}
    >
      <ScrollAreaPrimitive.ScrollAreaThumb
        data-slot="scroll-area-thumb"
        className="bg-border relative flex-1 rounded-full"
      />
    </ScrollAreaPrimitive.ScrollAreaScrollbar>
  )
}

export { ScrollArea, ScrollBar }
````

## File: src/components/ui/select.tsx
````typescript
import * as React from "react"
import * as SelectPrimitive from "@radix-ui/react-select"
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function Select({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Root>) {
  return <SelectPrimitive.Root data-slot="select" {...props} />
}

function SelectGroup({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Group>) {
  return <SelectPrimitive.Group data-slot="select-group" {...props} />
}

function SelectValue({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Value>) {
  return <SelectPrimitive.Value data-slot="select-value" {...props} />
}

function SelectTrigger({
  className,
  size = "default",
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Trigger> & {
  size?: "sm" | "default"
}) {
  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      data-size={size}
      className={cn(
        "border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <ChevronDownIcon className="size-4 opacity-50" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  )
}

function SelectContent({
  className,
  children,
  position = "popper",
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Content>) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        data-slot="select-content"
        className={cn(
          "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md",
          position === "popper" &&
            "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
          className
        )}
        position={position}
        {...props}
      >
        <SelectScrollUpButton />
        <SelectPrimitive.Viewport
          className={cn(
            "p-1",
            position === "popper" &&
              "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
          )}
        >
          {children}
        </SelectPrimitive.Viewport>
        <SelectScrollDownButton />
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  )
}

function SelectLabel({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Label>) {
  return (
    <SelectPrimitive.Label
      data-slot="select-label"
      className={cn("text-muted-foreground px-2 py-1.5 text-xs", className)}
      {...props}
    />
  )
}

function SelectItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Item>) {
  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      className={cn(
        "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        className
      )}
      {...props}
    >
      <span className="absolute right-2 flex size-3.5 items-center justify-center">
        <SelectPrimitive.ItemIndicator>
          <CheckIcon className="size-4" />
        </SelectPrimitive.ItemIndicator>
      </span>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  )
}

function SelectSeparator({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Separator>) {
  return (
    <SelectPrimitive.Separator
      data-slot="select-separator"
      className={cn("bg-border pointer-events-none -mx-1 my-1 h-px", className)}
      {...props}
    />
  )
}

function SelectScrollUpButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollUpButton>) {
  return (
    <SelectPrimitive.ScrollUpButton
      data-slot="select-scroll-up-button"
      className={cn(
        "flex cursor-default items-center justify-center py-1",
        className
      )}
      {...props}
    >
      <ChevronUpIcon className="size-4" />
    </SelectPrimitive.ScrollUpButton>
  )
}

function SelectScrollDownButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollDownButton>) {
  return (
    <SelectPrimitive.ScrollDownButton
      data-slot="select-scroll-down-button"
      className={cn(
        "flex cursor-default items-center justify-center py-1",
        className
      )}
      {...props}
    >
      <ChevronDownIcon className="size-4" />
    </SelectPrimitive.ScrollDownButton>
  )
}

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
}
````

## File: src/components/ui/slider.tsx
````typescript
import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

import { cn } from "@/lib/utils"

function Slider({
  className,
  defaultValue,
  value,
  min = 0,
  max = 100,
  ...props
}: React.ComponentProps<typeof SliderPrimitive.Root>) {
  const _values = React.useMemo(
    () =>
      Array.isArray(value)
        ? value
        : Array.isArray(defaultValue)
          ? defaultValue
          : [min, max],
    [value, defaultValue, min, max]
  )

  return (
    <SliderPrimitive.Root
      data-slot="slider"
      defaultValue={defaultValue}
      value={value}
      min={min}
      max={max}
      className={cn(
        "relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col",
        className
      )}
      {...props}
    >
      <SliderPrimitive.Track
        data-slot="slider-track"
        className={cn(
          "bg-muted relative grow overflow-hidden rounded-full data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5"
        )}
      >
        <SliderPrimitive.Range
          data-slot="slider-range"
          className={cn(
            "bg-primary absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full"
          )}
        />
      </SliderPrimitive.Track>
      {Array.from({ length: _values.length }, (_, index) => (
        <SliderPrimitive.Thumb
          data-slot="slider-thumb"
          key={index}
          className="border-primary bg-background ring-ring/50 block size-4 shrink-0 rounded-full border shadow-sm transition-[color,box-shadow] hover:ring-4 focus-visible:ring-4 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50"
        />
      ))}
    </SliderPrimitive.Root>
  )
}

export { Slider }
````

## File: src/components/ui/table.tsx
````typescript
import * as React from "react"

import { cn } from "@/lib/utils"

function Table({ className, ...props }: React.ComponentProps<"table">) {
  return (
    <div
      data-slot="table-container"
      className="relative w-full overflow-x-auto"
    >
      <table
        data-slot="table"
        className={cn("w-full caption-bottom text-sm", className)}
        {...props}
      />
    </div>
  )
}

function TableHeader({ className, ...props }: React.ComponentProps<"thead">) {
  return (
    <thead
      data-slot="table-header"
      className={cn("[&_tr]:border-b", className)}
      {...props}
    />
  )
}

function TableBody({ className, ...props }: React.ComponentProps<"tbody">) {
  return (
    <tbody
      data-slot="table-body"
      className={cn("[&_tr:last-child]:border-0", className)}
      {...props}
    />
  )
}

function TableFooter({ className, ...props }: React.ComponentProps<"tfoot">) {
  return (
    <tfoot
      data-slot="table-footer"
      className={cn(
        "bg-muted/50 border-t font-medium [&>tr]:last:border-b-0",
        className
      )}
      {...props}
    />
  )
}

function TableRow({ className, ...props }: React.ComponentProps<"tr">) {
  return (
    <tr
      data-slot="table-row"
      className={cn(
        "hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors",
        className
      )}
      {...props}
    />
  )
}

function TableHead({ className, ...props }: React.ComponentProps<"th">) {
  return (
    <th
      data-slot="table-head"
      className={cn(
        "text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className
      )}
      {...props}
    />
  )
}

function TableCell({ className, ...props }: React.ComponentProps<"td">) {
  return (
    <td
      data-slot="table-cell"
      className={cn(
        "p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className
      )}
      {...props}
    />
  )
}

function TableCaption({
  className,
  ...props
}: React.ComponentProps<"caption">) {
  return (
    <caption
      data-slot="table-caption"
      className={cn("text-muted-foreground mt-4 text-sm", className)}
      {...props}
    />
  )
}

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
}
````

## File: src/components/ui/tabs.tsx
````typescript
import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

import { cn } from "@/lib/utils"

function Tabs({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn("flex flex-col gap-2", className)}
      {...props}
    />
  )
}

function TabsList({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        "bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]",
        className
      )}
      {...props}
    />
  )
}

function TabsTrigger({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        "data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    />
  )
}

function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn("flex-1 outline-none", className)}
      {...props}
    />
  )
}

export { Tabs, TabsList, TabsTrigger, TabsContent }
````

## File: src/layout/component/PlaybackControls.tsx
````typescript
import { Button } from "@/components/ui/button";
import {usePlayStore} from "@/stores/usePlayerStore.ts";
import {useEffect, useRef, useState} from "react";
import {Laptop2, ListMusic, Mic2, Pause, Play, Repeat, Shuffle, SkipBack, SkipForward, Volume1} from "lucide-react";
import {Slider} from "@/components/ui/slider";



const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
};

export function PlaybackControls() {

    const {currentSong, isPlaying, togglePlay, playNext, playPrevious} = usePlayStore();

    const[volume, setVolume]=useState(75);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const audioRef = useRef<HTMLAudioElement | null >(null);

    useEffect(() => {
        audioRef.current = document.querySelector("audio");

        const audio = audioRef.current;
        if (!audio) return;

        const updateTime = () => setCurrentTime(audio.currentTime);
        const updateDuration = () => setDuration(audio.duration);

        audio.addEventListener("timeupdate", updateTime);
        audio.addEventListener("loadedmetadata", updateDuration);

        const handleEnded = () => {
            usePlayStore.setState({isPlaying: false});

        }
        audio.addEventListener("ended", handleEnded);

        return() =>{
            audio.removeEventListener("timeupdate", updateTime);
            audio.removeEventListener("loadedmetadata", updateDuration);
            audio.removeEventListener("ended", handleEnded) };
    },[currentSong]);

    const handleSeek = (value: number[]) => {
        if (audioRef.current) {
            audioRef.current.currentTime = value[0];
        }
    }

    return (
        <footer className="h-20 sm:h-24 bg-zinc-900 border-t border-zinc-800 px-4">
            <div className='flex justify-between items-center h-full max-w-[1800px] mx-auto'>
                {/* currently playing song */}
                <div className='hidden sm:flex items-center gap-4 min-w-[180px] w-[30%]'>
                    {currentSong && (
                        <>
                            <img
                                src={currentSong.imageUrl}
                                alt={currentSong.title}
                                className='w-14 h-14 object-cover rounded-md'
                            />
                            <div className='flex-1 min-w-0'>
                                <div className='font-medium truncate hover:underline cursor-pointer'>
                                    {currentSong.title}
                                </div>
                                <div className='text-sm text-zinc-400 truncate hover:underline cursor-pointer'>
                                    {currentSong.artist}
                                </div>
                            </div>
                        </>
                    )}
                </div>

                {/* player controls*/}
                <div className='flex flex-col items-center gap-2 flex-1 max-w-full sm:max-w-[45%]'>
                    <div className='flex items-center gap-4 sm:gap-6'>
                        <Button
                            size='icon'
                            variant='ghost'
                            className='hidden sm:inline-flex hover:text-white text-zinc-400'
                        >
                            <Shuffle className='h-4 w-4'/>
                        </Button>

                        <Button
                            size='icon'
                            variant='ghost'
                            className='hover:text-white text-zinc-400'
                            onClick={playPrevious}
                            disabled={!currentSong}
                        >
                            <SkipBack className='h-4 w-4'/>
                        </Button>

                        <Button
                            size='icon'
                            className='bg-white hover:bg-white/80 text-black rounded-full h-8 w-8'
                            onClick={togglePlay}
                            disabled={!currentSong}
                        >
                            {isPlaying ? <Pause className='h-5 w-5'/> : <Play className='h-5 w-5'/>}
                        </Button>
                        <Button
                            size='icon'
                            variant='ghost'
                            className='hover:text-white text-zinc-400'
                            onClick={playNext}
                            disabled={!currentSong}
                        >
                            <SkipForward className='h-4 w-4'/>
                        </Button>
                        <Button
                            size='icon'
                            variant='ghost'
                            className='hidden sm:inline-flex hover:text-white text-zinc-400'
                        >
                            <Repeat className='h-4 w-4'/>
                        </Button>
                    </div>

                    <div className='hidden sm:flex items-center gap-2 w-full'>
                        <div className='text-xs text-zinc-400'>{formatTime(currentTime)}</div>
                        <Slider
                            value={[currentTime]}
                            max={duration || 100}
                            step={1}
                            className='w-full hover:cursor-grab active:cursor-grabbing'
                            onValueChange={handleSeek}
                        />
                        <div className='text-xs text-zinc-400'>{formatTime(duration)}</div>
                    </div>
                </div>
                {/* volume controls */}
                <div className='hidden sm:flex items-center gap-4 min-w-[180px] w-[30%] justify-end'>
                    <Button size='icon' variant='ghost' className='hover:text-white text-zinc-400'>
                        <Mic2 className='h-4 w-4'/>
                    </Button>
                    <Button size='icon' variant='ghost' className='hover:text-white text-zinc-400'>
                        <ListMusic className='h-4 w-4'/>
                    </Button>
                    <Button size='icon' variant='ghost' className='hover:text-white text-zinc-400'>
                        <Laptop2 className='h-4 w-4'/>
                    </Button>

                    <div className='flex items-center gap-2'>
                        <Button size='icon' variant='ghost' className='hover:text-white text-zinc-400'>
                            <Volume1 className='h-4 w-4'/>
                        </Button>

                        <Slider
                            value={[volume]}
                            max={100}
                            step={1}
                            className='w-24 hover:cursor-grab active:cursor-grabbing'
                            onValueChange={(value) => {
                                setVolume(value[0]);
                                if (audioRef.current) {
                                    audioRef.current.volume = value[0] / 100;
                                }
                            }}
                        />
                    </div>
                </div>
            </div>
        </footer>
    );
}
````

## File: src/lib/utils.ts
````typescript
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
````

## File: src/pages/404/NotFoundPage.tsx
````typescript
import { Home, Music2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function NotFoundPage() {
	const navigate = useNavigate();

	return (
		<div className='h-screen bg-neutral-900 flex items-center justify-center'>
			<div className='text-center space-y-8 px-4'>
				{/* Large animated musical note */}
				<div className='flex justify-center animate-bounce'>
					<Music2 className='h-24 w-24 text-emerald-500' />
				</div>

				{/* Error message */}
				<div className='space-y-4'>
					<h1 className='text-7xl font-bold text-white'>404</h1>
					<h2 className='text-2xl font-semibold text-white'>Page not found</h2>
					<p className='text-neutral-400 max-w-md mx-auto'>
						Looks like this track got lost in the shuffle. Let's get you back to the music.
					</p>
				</div>

				{/* Action buttons */}
				<div className='flex flex-col sm:flex-row gap-4 justify-center items-center mt-8'>
					<Button
						onClick={() => navigate(-1)}
						variant='outline'
						className='bg-neutral-800 hover:bg-neutral-700 text-white border-neutral-700 w-full sm:w-auto'
					>
						Go Back
					</Button>
					<Button
						onClick={() => navigate("/")}
						className='bg-emerald-500 hover:bg-emerald-600 text-white w-full sm:w-auto'
					>
						<Home className='mr-2 h-4 w-4' />
						Back to Home
					</Button>
				</div>
			</div>
		</div>
	);
}
````

## File: src/pages/admin/AdminPage.tsx~
````
import {useAuthStore} from "@/stores/useAuthStore.ts";

import {DashboardStats} from "@/pages/admin/components/DashboardStats.tsx";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs.tsx";
import {Album, Music} from "lucide-react";
import {SongTabContent} from "@/pages/admin/components/SongTabContent.tsx";
import {AlbumTabContent} from "@/pages/admin/components/AlbumTabContent.tsx";
import {useEffect} from "react";
import {useMusicStore} from "@/stores/useMusicStore.ts";
import Header from "@/pages/admin/components/Header.tsx";

export const AdminPage = () => {

    const  {isAdmin, isLoading} = useAuthStore()

    const {fetchAlbums, fetchSongs, fetchStats} =useMusicStore();
    console.log("check status:",fetchStats)

    useEffect(() => {
        fetchAlbums();
        fetchSongs();
        fetchStats();
    }, [fetchStats, fetchAlbums, fetchSongs]);

    if(!isAdmin && isLoading) return <div>Unauthorized</div>

    return (
        <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-900
        to-black text-zinc-100 p-8">
            <Header/>
            <DashboardStats/>

            <Tabs defaultValue='songs' className='space-y-6'>
                <TabsList className='p-1 bg-zinc-800/50'>
                    <TabsTrigger value="songs" className='data-[state=active]:bg-zinc-700'>
                        <Music className='mr-2 size-4'/>
                        Songs
                    </TabsTrigger>
                    <TabsTrigger value="albums" className='data-[state=active]:bg-zinc-700'>
                        <Album className='mr-2 size-4'/>
                        Albums
                    </TabsTrigger>
                </TabsList>
                <TabsContent value="songs">
                    <SongTabContent/>
                </TabsContent>
                <TabsContent value="albums">
                    <AlbumTabContent/>
                </TabsContent>
            </Tabs>
        </div>
    );
};
````

## File: src/pages/admin/components/AddAlbumDialog.tsx
````typescript
import React, { useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import { toast } from 'react-hot-toast';
import { axiosInstance } from '@/lib/axios';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from '@/components/ui/dialog';
import { Plus, Upload } from 'lucide-react';
import { Input } from '@/components/ui/input';

const AddAlbumDialog = () => {
    const [albumDialogOpen, setAlbumDialogOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const [newAlbum, setNewAlbum] = useState({
        title: "",
        artist: "",
        releaseYear: new Date().getFullYear(),
    });

    const [imageFile, setImageFile] = useState<File | null>(null);

    const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setImageFile(file);
        }
    };

    const handleSubmit = async () => {
		setIsLoading(true);

		try {
			if (!imageFile) {
				return toast.error("Please upload an image");
			}

			const formData = new FormData();
			formData.append("title", newAlbum.title);
			formData.append("artist", newAlbum.artist);
			formData.append("releaseYear", newAlbum.releaseYear.toString());
			formData.append("imageFile", imageFile);

			await axiosInstance.post("/admin/albums", formData, {
				headers: {
					"Content-Type": "multipart/form-data",
				},
			});

			setNewAlbum({
				title: "",
				artist: "",
				releaseYear: new Date().getFullYear(),
			});
			setImageFile(null);
			setAlbumDialogOpen(false);
			toast.success("Album created successfully");
		} catch (error: any) {
			toast.error("Failed to create album: " + error.message);
		} finally {
			setIsLoading(false);
		}
	};
    


  return (
    <Dialog open={albumDialogOpen} onOpenChange={setAlbumDialogOpen}>
			<DialogTrigger asChild>
				<Button className='bg-violet-500 hover:bg-violet-600 text-white'>
					<Plus className='mr-2 h-4 w-4' />
					Add Album
				</Button>
			</DialogTrigger>
			<DialogContent className='bg-zinc-900 border-zinc-700'>
				<DialogHeader>
					<DialogTitle>Add New Album</DialogTitle>
					<DialogDescription>Add a new album to your collection</DialogDescription>
				</DialogHeader>
				<div className='space-y-4 py-4'>
					<input
						type='file'
						ref={fileInputRef}
						onChange={handleImageSelect}
						accept='image/*'
						className='hidden'
					/>
					<div
						className='flex items-center justify-center p-6 border-2 border-dashed border-zinc-700 rounded-lg cursor-pointer'
						onClick={() => fileInputRef.current?.click()}
					>
						<div className='text-center'>
							<div className='p-3 bg-zinc-800 rounded-full inline-block mb-2'>
								<Upload className='h-6 w-6 text-zinc-400' />
							</div>
							<div className='text-sm text-zinc-400 mb-2'>
								{imageFile ? imageFile.name : "Upload album artwork"}
							</div>
							<Button variant='outline' size='sm' className='text-xs'>
								Choose File
							</Button>
						</div>
					</div>
					<div className='space-y-2'>
						<label className='text-sm font-medium'>Album Title</label>
						<Input
							value={newAlbum.title}
							onChange={(e) => setNewAlbum({ ...newAlbum, title: e.target.value })}
							className='bg-zinc-800 border-zinc-700'
							placeholder='Enter album title'
						/>
					</div>
					<div className='space-y-2'>
						<label className='text-sm font-medium'>Artist</label>
						<Input
							value={newAlbum.artist}
							onChange={(e) => setNewAlbum({ ...newAlbum, artist: e.target.value })}
							className='bg-zinc-800 border-zinc-700'
							placeholder='Enter artist name'
						/>
					</div>
					<div className='space-y-2'>
						<label className='text-sm font-medium'>Release Year</label>
						<Input
							type='number'
							value={newAlbum.releaseYear}
							onChange={(e) => setNewAlbum({ ...newAlbum, releaseYear: parseInt(e.target.value) })}
							className='bg-zinc-800 border-zinc-700'
							placeholder='Enter release year'
							min={1900}
							max={new Date().getFullYear()}
						/>
					</div>
				</div>
				<DialogFooter>
					<Button variant='outline' onClick={() => setAlbumDialogOpen(false)} disabled={isLoading}>
						Cancel
					</Button>
					<Button
						onClick={handleSubmit}
						className='bg-violet-500 hover:bg-violet-600'
						disabled={isLoading || !imageFile || !newAlbum.title || !newAlbum.artist}
					>
						{isLoading ? "Creating..." : "Add Album"}
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
  )
}

export default AddAlbumDialog
````

## File: src/pages/admin/components/Header.tsx
````typescript
import { UserButton } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className='flex items-center justify-between'>
            <div className='flex items-center gap-3 mb-8'>
                <Link to='/' className='rounded-lg'>
                    <img src='/spotify.png' className='size-10 text-black' />
                </Link>
                <div>
                    <h1 className='text-3xl font-bold'>Music Manager</h1>
                    <p className='text-zinc-400 mt-1'>Manage your music catalog</p>
                </div>
            </div>
            <UserButton />
        </div>
    );
};
export default Header;
````

## File: src/pages/admin/components/SongsTable.tsx
````typescript
import {useMusicStore} from "@/stores/useMusicStore.ts";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table.tsx";
import {Calendar, Trash2} from "lucide-react";
import {Button} from "@/components/ui/button.tsx";

export const SongsTable = () => {

    const { songs, isLoading, error, deleteSong } = useMusicStore();

    if (isLoading) {
        return (
            <div className='flex items-center justify-center py-8'>
                <div className='text-zinc-400'>Loading songs...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className='flex items-center justify-center py-8'>
                <div className='text-red-400'>{error}</div>
            </div>
        );
    }

    return (
        <Table>
            <TableHeader>
                <TableRow className='hover:bg-zinc-800/50'>
                    <TableHead className='w-[50px]'></TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead>Artist</TableHead>
                    <TableHead>Release Date</TableHead>
                    <TableHead className='text-right'>Actions</TableHead>
                </TableRow>
            </TableHeader>

            <TableBody>
                {songs.map((song) => (
                    <TableRow key={song._id} className='hover:bg-zinc-800/50'>
                        <TableCell>
                            <img src={song.imageUrl} alt={song.title} className='size-10 rounded object-cover' />
                        </TableCell>
                        <TableCell className='font-medium'>{song.title}</TableCell>
                        <TableCell>{song.artist}</TableCell>
                        <TableCell>
							<span className='inline-flex items-center gap-1 text-zinc-400'>
								<Calendar className='h-4 w-4' />
                                {song.createdAt.split("T")[0]}
							</span>
                        </TableCell>

                        <TableCell className='text-right'>
                            <div className='flex gap-2 justify-end'>
                                <Button
                                    variant={"ghost"}
                                    size={"sm"}
                                    className='text-red-400 hover:text-red-300 hover:bg-red-400/10'
                                    onClick={() => deleteSong(song._id)}
                                >
                                    <Trash2 className='size-4' />
                                </Button>
                            </div>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};
````

## File: src/pages/admin/components/StatsCard.tsx
````typescript
import {Card, CardContent} from "@/components/ui/card.tsx";

type StatsCardProps = {
    icon: React.ElementType;
    label: string;
    value: string;
    bgColor: string;
    iconColor: string;
};

export const StatsCard = ({ bgColor, icon: Icon, iconColor, label, value }: StatsCardProps) => {
    return (
        <Card className='bg-zinc-800/50 border-zinc-700/50 hover:bg-zinc-800/80 transition-colors'>
            <CardContent className='p-6'>
                <div className='flex items-center gap-4'>
                    <div className={`p-3 rounded-lg ${bgColor}`}>
                        <Icon className={`size-6 ${iconColor}`} />
                    </div>
                    <div>
                        <p className='text-sm text-zinc-400'>{label}</p>
                        <p className='text-2xl font-bold'>{value}</p>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};
````

## File: src/pages/admin/components/StatsCard.tsx~
````
type StatsCardProps = {
    icon: React.ElementType;
    label: string;
    value: string;
    bgColor: string;
    iconColor: string;
};

export const StatsCard = ({ bgColor, icon: Icon, iconColor, label, value }: StatsCardProps) => {
    return (
        <Card className='bg-zinc-800/50 border-zinc-700/50 hover:bg-zinc-800/80 transition-colors'>
            <CardContent className='p-6'>
                <div className='flex items-center gap-4'>
                    <div className={`p-3 rounded-lg ${bgColor}`}>
                        <Icon className={`size-6 ${iconColor}`} />
                    </div>
                    <div>
                        <p className='text-sm text-zinc-400'>{label}</p>
                        <p className='text-2xl font-bold'>{value}</p>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};
````

## File: src/pages/chat/components/ChatHeader.tsx
````typescript
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useChatStore } from "@/stores/useChatStore";

const ChatHeader = () => {
	const { selectedUser, onlineUsers } = useChatStore();

	if (!selectedUser) return null;

	return (
		<div className='p-4 border-b border-zinc-800'>
			<div className='flex items-center gap-3'>
				<Avatar>
					<AvatarImage src={selectedUser.imageUrl} alt={selectedUser.fullName || 'User'} />
					<AvatarFallback>
						{selectedUser.fullName ? selectedUser.fullName[0].toUpperCase() : 'U'}
					</AvatarFallback>
				</Avatar>
				<div>
					<h2 className='font-medium'>{selectedUser.fullName || 'User'}</h2>
					<p className='text-sm text-zinc-400'>
						{onlineUsers.has(selectedUser.clerkId) ? "Online" : "Offline"}
					</p>
				</div>
			</div>
		</div>
	);
};

export default ChatHeader;
````

## File: src/pages/chat/components/MessageInput.tsx
````typescript
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useChatStore } from "@/stores/useChatStore";
import { useUser } from "@clerk/clerk-react";
import { Send } from "lucide-react";
import { useState } from "react";

const MessageInput = () => {
	const [newMessage, setNewMessage] = useState("");
	const { user } = useUser();
	const { selectedUser, sendMessage } = useChatStore();

	const handleSend = () => {
		if (!selectedUser || !user || !newMessage) return;
		sendMessage(selectedUser.clerkId, user.id, newMessage.trim());
		setNewMessage("");
	};

	return (
		<div className='p-4 mt-auto border-t border-zinc-800'>
			<div className='flex gap-2'>
				<Input
					placeholder='Type a message'
					value={newMessage}
					onChange={(e) => setNewMessage(e.target.value)}
					className='bg-zinc-800 border-none'
					onKeyDown={(e) => e.key === "Enter" && handleSend()}
				/>

				<Button size={"icon"} onClick={handleSend} disabled={!newMessage.trim()}>
					<Send className='size-4' />
				</Button>
			</div>
		</div>
	);
};
export default MessageInput;
````

## File: src/pages/home/component/PlayButton.tsx
````typescript
import {usePlayStore} from "@/stores/usePlayerStore.ts";
import {Song} from "@/types";
import {Button} from "@/components/ui/button.tsx";
import {Pause, Play} from "lucide-react";

export const PlayButton = ({song}:{song:Song}) => {

    const {currentSong, isPlaying, setCurrentSong, togglePlay} =usePlayStore()
    const isCurrentSong = currentSong?._id === song._id
    
    const handlePlay = () =>{
        if (isCurrentSong)  togglePlay()
        else setCurrentSong(song)
    }
    
    return (
        <Button
        size={"icon"}
        onClick={handlePlay}
        className={`absolute bottom-3 right-2 bg-green-500 hover:bg-green-400 hover:scale-105 transition-all 
				opacity-0 translate-y-2 group-hover:translate-y-0 ${
            isCurrentSong ? "opacity-100" : "opacity-0 group-hover:opacity-100"
        }`}>
            {isCurrentSong && isPlaying ? (
                <Pause className='size-5 text-black' />
            ) : (
                <Play className='size-5 text-black' />
            )}

        </Button>
    );
};
````

## File: src/pages/home/component/SectionGridSkeleton.tsx
````typescript
const SectionGridSkeleton = () => {
	return (
		<div className='mb-8'>
			<div className='h-8 w-48 bg-zinc-800 rounded mb-4 animate-pulse' />
			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
				{Array.from({ length: 4 }).map((_, i) => (
					<div key={i} className='bg-zinc-800/40 p-4 rounded-md animate-pulse'>
						<div className='aspect-square rounded-md bg-zinc-700 mb-4' />
						<div className='h-4 bg-zinc-700 rounded w-3/4 mb-2' />
						<div className='h-4 bg-zinc-700 rounded w-1/2' />
					</div>
				))}
			</div>
		</div>
	);
};
export default SectionGridSkeleton;
````

## File: src/stores/useAuthStore.ts
````typescript
import { axiosInstance } from "@/lib/axios";
import {create} from "zustand";

interface AuthStore{
    isAdmin: boolean;
    isLoading: boolean;
    error: string | null;

    checkAdminStatus: () => Promise<void>;
    reset:() => void;
    
}

export const useAuthStore = create<AuthStore>((set) => ({
    isAdmin: false,
    isLoading: false,
    error: null,
    checkAdminStatus: async () => {
        set({ isLoading: true, error: null });
        try {
            const response = await axiosInstance.get("/admin/check");
            set({isAdmin:response.data.admin});
        } catch (error:any) {
            set({isAdmin:false, error: error.response.data.message})
        } finally {
            set({isLoading: false})
        }
    },
    reset: () => {
        set({isAdmin: false, isLoading: false, error: null})
    }
}))
````

## File: src/stores/usePlayerStore.ts~
````
import {create} from "zustand"
import { Song } from "@/types"

interface PlayStore {
    currentSong: Song | null;
    isPlaying: boolean;
    queue: Song[];
    currentIndex: number;

    initializeQueue: (songs: Song[]) => void;
    playAlbum: (songs: Song[], startIndex?: number) => void;
    setCurrentSong: (song: Song | null) => void;
    togglePlay: () => void;
	playNext: () => void;
	playPrevious: () => void;
}

export const usePlayStore = create<PlayStore>((set, get) =>({
    currentSong: null,
	isPlaying: false,
	queue: [],
	currentIndex: -1,

    initializeQueue: (songs: Song[]) => {
        console.log("Initializing queue with:", songs);
        set({
            queue: songs,
            currentSong: get().currentSong || songs[0],
            currentIndex: get().currentIndex === -1 ? 0 : get().currentIndex
        })
    },



    playAlbum: (songs: Song[], startIndex = 0) => {
        if (songs.length ===0) return;

        const song =songs[startIndex];

        set({
            queue: songs,
            currentSong: song,
            currentIndex: startIndex,
			isPlaying: true,
        })
    },
    setCurrentSong: (song: Song | null) => {
        if (!song) return;

        const songIndex = get().queue.findIndex(s => s._id === song._id);
		set({
			currentSong: song,
			isPlaying: true,
			currentIndex: songIndex !== -1 ? songIndex : get().currentIndex,
		});
    },
    togglePlay: () => {
        const willStartPlaying = !get().isPlaying;

        set({
			isPlaying: willStartPlaying,
		});
    },
    playNext: () => {
        const { currentIndex, queue} = get();
        const nextIndex = currentIndex + 1;

        if (nextIndex < queue.length) {
            const nextSong = queue[nextIndex];

            set({
                currentSong: nextSong,
                currentIndex: nextIndex,
                isPlaying: true,
            });
        } else {
            set({ isPlaying: false})
        }
    },
    playPrevious: () => {
        const { currentIndex, queue} = get();
        const prevIndex = currentIndex - 1;

        if(prevIndex >=0) {
            const prevSong = queue[prevIndex];
            set({
                currentSong: prevSong,
                currentIndex: prevIndex,
                isPlaying: true,
            })
        } else {
            set({ isPlaying: false});
        }
    },
}))
````

## File: src/vite-env.d.ts
````typescript
/// <reference types="vite/client" />
````

## File: tsconfig.node.json
````json
{
  "compilerOptions": {
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.node.tsbuildinfo",
    "target": "ES2022",
    "lib": ["ES2023"],
    "module": "ESNext",
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedSideEffectImports": true
  },
  "include": ["vite.config.ts"]
}
````

## File: index.html
````html
<!doctype html>
<html lang="en" class="dark">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/spotify.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Spotify</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
````

## File: src/lib/axios.ts
````typescript
import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: import.meta.env.MODE === "development" ? "https://spotify-clone-backend-ruddy.vercel.app/api" : "/api",
})
````

## File: src/pages/admin/components/AddSongDialog.tsx
````typescript
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useMusicStore } from '@/stores/useMusicStore';
import { toast } from 'react-hot-toast';
import { Plus, Upload } from 'lucide-react';
import { useRef, useState } from 'react'
import { Button } from '@/components/ui/button';
import { DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { axiosInstance } from '@/lib/axios';

interface NewSong {
    title: string;
    artist: string;
    album: string;
    duration: string;
}


const AddSongDialog = () => {

    const {albums} = useMusicStore();
    const [songDialogOpen, setSongDialogOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const [newSong, setNewSong] = useState<NewSong>({
        title: "",
        artist: "",
        album: "",
        duration: "0",
    });

    const [files, setFiles] = useState<{audio: File | null, image: File | null}>({
        audio:null,
        image:null,
    });

    const audioInputRef = useRef<HTMLInputElement>(null);
    const imageInputRef = useRef<HTMLInputElement>(null);

    const handleSubmit = async () => {
        setIsLoading(true);
        try {
            if(!files.audio || !files.image) {
                return toast.error("Please upload an audio file and an image");
            }
            const formData = new FormData();
            formData.append("title", newSong.title);
            formData.append("artist", newSong.artist);
            formData.append("duration", newSong.duration.toString());
            if(newSong.album && newSong.album !== "none") {
                formData.append("albumId", newSong.album);
            }
            formData.append("audioFile", files.audio);
            formData.append("imageFile", files.image);

            await axiosInstance.post("/admin/songs", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                }
            });

            setNewSong({
                title: "",
                artist: "",
                album: "",
                duration: "0",
            });

            setFiles({
                audio: null,
                image: null,
            });
            toast.success("Song added successfully");
            
            
        } catch (error: any) {
            toast.error("Error adding song"+error.response.data.message);
        } finally {
            setIsLoading(false);
        }
    };

  return (
    <Dialog open={songDialogOpen} onOpenChange={setSongDialogOpen}>
        <DialogTrigger asChild>
            <Button className='bg-emerald-500 hover:bg-emerald-600 text-black'>
                <Plus className='mr-2 h-4 w-4' />
                Add Song
            </Button>
        </DialogTrigger>
        <DialogContent className='bg-zinc-900 border-zinc-700 max-h-[80vh] overflow-auto'>
            <DialogHeader>
                <DialogTitle>Add Song</DialogTitle>
                <DialogDescription>Add a new song to your music library</DialogDescription>
            </DialogHeader>
            <div className='space-y-4 py-4'>
            <input
						type='file'
						accept='audio/*'
						ref={audioInputRef}
						hidden
						onChange={(e) => setFiles((prev) => ({ ...prev, audio: e.target.files![0] }))}
					/>

					<input
						type='file'
						ref={imageInputRef}
						className='hidden'
						accept='image/*'
						onChange={(e) => setFiles((prev) => ({ ...prev, image: e.target.files![0] }))}
					/>

					{/* image upload area */}
                    <div
						className='flex items-center justify-center p-6 border-2 border-dashed border-zinc-700 rounded-lg cursor-pointer'
						onClick={() => imageInputRef.current?.click()}
					>
						<div className='text-center'>
							{files.image ? (
								<div className='space-y-2'>
									<div className='text-sm text-emerald-500'>Image selected:</div>
									<div className='text-xs text-zinc-400'>{files.image.name.slice(0, 20)}</div>
								</div>
							) : (
								<>
									<div className='p-3 bg-zinc-800 rounded-full inline-block mb-2'>
										<Upload className='h-6 w-6 text-zinc-400' />
									</div>
									<div className='text-sm text-zinc-400 mb-2'>Upload artwork</div>
									<Button variant='outline' size='sm' className='text-xs'>
										Choose File
									</Button>
								</>
							)}
						</div>
					</div>
                    {/* Audio upload */}
					<div className='space-y-2'>
						<label className='text-sm font-medium'>Audio File</label>
						<div className='flex items-center gap-2'>
							<Button variant='outline' onClick={() => audioInputRef.current?.click()} className='w-full'>
								{files.audio ? files.audio.name.slice(0, 20) : "Choose Audio File"}
							</Button>
						</div>
					</div>
                    {/* other fields */}
					<div className='space-y-2'>
						<label className='text-sm font-medium'>Title</label>
						<Input
							value={newSong.title}
							onChange={(e) => setNewSong({ ...newSong, title: e.target.value })}
							className='bg-zinc-800 border-zinc-700'
						/>
					</div>

					<div className='space-y-2'>
						<label className='text-sm font-medium'>Artist</label>
						<Input
							value={newSong.artist}
							onChange={(e) => setNewSong({ ...newSong, artist: e.target.value })}
							className='bg-zinc-800 border-zinc-700'
						/>
					</div>

					<div className='space-y-2'>
						<label className='text-sm font-medium'>Duration (seconds)</label>
						<Input
							type='number'
							min='0'
							value={newSong.duration}
							onChange={(e) => setNewSong({ ...newSong, duration: e.target.value || "0" })}
							className='bg-zinc-800 border-zinc-700'
						/>
					</div>
                    <div className='space-y-2'>
						<label className='text-sm font-medium'>Album (Optional)</label>
						<Select
							value={newSong.album}
							onValueChange={(value) => setNewSong({ ...newSong, album: value })}
						>
							<SelectTrigger className='bg-zinc-800 border-zinc-700'>
								<SelectValue placeholder='Select album' />
							</SelectTrigger>
							<SelectContent className='bg-zinc-800 border-zinc-700'>
								<SelectItem value='none'>No Album (Single)</SelectItem>
								{albums.map((album) => (
									<SelectItem key={album._id} value={album._id}>
										{album.title}
									</SelectItem>
								))}
							</SelectContent>
						</Select>
					</div>

            </div>
            <DialogFooter>
					<Button variant='outline' onClick={() => setSongDialogOpen(false)} disabled={isLoading}>
						Cancel
					</Button>
					<Button onClick={handleSubmit} disabled={isLoading}>
						{isLoading ? "Uploading..." : "Add Song"}
					</Button>
				</DialogFooter>
        </DialogContent>
    </Dialog>

  )
}

export default AddSongDialog
````

## File: src/pages/admin/components/AlbumsTable.tsx
````typescript
import { Button } from '@/components/ui/button';
import { Trash2 } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useMusicStore } from '@/stores/useMusicStore'
import { Calendar } from 'lucide-react';
import { Music } from 'lucide-react';
import { useEffect } from 'react'

const AlbumsTable = () => {

    const {albums, deleteAlbum, fetchAlbums} = useMusicStore();

    useEffect(() => {
		fetchAlbums();
	}, [fetchAlbums]);

  return (
    <Table>
			<TableHeader>
				<TableRow className='hover:bg-zinc-800/50'>
					<TableHead className='w-[50px]'></TableHead>
					<TableHead>Title</TableHead>
					<TableHead>Artist</TableHead>
					<TableHead>Release Year</TableHead>
					<TableHead>Songs</TableHead>
					<TableHead className='text-right'>Actions</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{albums.map((album) => (
					<TableRow key={album._id} className='hover:bg-zinc-800/50'>
						<TableCell>
							<img src={album.imageUrl} alt={album.title} className='w-10 h-10 rounded object-cover' />
						</TableCell>
						<TableCell className='font-medium'>{album.title}</TableCell>
						<TableCell>{album.artist}</TableCell>
						<TableCell>
							<span className='inline-flex items-center gap-1 text-zinc-400'>
								<Calendar className='h-4 w-4' />
								{album.releaseYear}
							</span>
						</TableCell>
						<TableCell>
							<span className='inline-flex items-center gap-1 text-zinc-400'>
								<Music className='h-4 w-4' />
								{album.songs.length} songs
							</span>
						</TableCell>
						<TableCell className='text-right'>
							<div className='flex gap-2 justify-end'>
								<Button
									variant='ghost'
									size='sm'
									onClick={() => deleteAlbum(album._id)}
									className='text-red-400 hover:text-red-300 hover:bg-red-400/10'
								>
									<Trash2 className='h-4 w-4' />
								</Button>
							</div>
						</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
  )
}

export default AlbumsTable
````

## File: src/pages/admin/components/DashboardStats.tsx
````typescript
import {useMusicStore} from "@/stores/useMusicStore.ts";
import {Library, ListMusic, PlayCircle, Users2} from "lucide-react";
import {StatsCard} from "@/pages/admin/components/StatsCard.tsx";

export const DashboardStats = () => {
    const { stats } = useMusicStore();

    const statsData = [
        {
            icon: ListMusic,
            label: "Total Songs",
            value: stats.totalSongs.toString(),
            bgColor: "bg-emerald-500/10",
            iconColor: "text-emerald-500",
        },
        {
            icon: Library,
            label: "Total Albums",
            value: stats.totalAlbums.toString(),
            bgColor: "bg-violet-500/10",
            iconColor: "text-violet-500",
        },
        {
            icon: Users2,
            label: "Total Artists",
            value: stats.totalArtists.toString(),
            bgColor: "bg-orange-500/10",
            iconColor: "text-orange-500",
        },
        {
            icon: PlayCircle,
            label: "Total Users",
            value: stats.totalUsers.toLocaleString(),
            bgColor: "bg-sky-500/10",
            iconColor: "text-sky-500",
        },
    ];

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 '>
            {statsData.map((stat) => (
                <StatsCard
                    key={stat.label}
                    icon={stat.icon}
                    label={stat.label}
                    value={stat.value}
                    bgColor={stat.bgColor}
                    iconColor={stat.iconColor}
                />
            ))}
        </div>
    );
};
````

## File: src/pages/admin/components/DashboardStats.tsx~
````
import {useMusicStore} from "@/stores/useMusicStore.ts";
import {Library, ListMusic, PlayCircle, Users2} from "lucide-react";

export const DashboardStats = () => {
    const { stats } = useMusicStore();

    const statsData = [
        {
            icon: ListMusic,
            label: "Total Songs",
            value: stats.totalSongs.toString(),
            bgColor: "bg-emerald-500/10",
            iconColor: "text-emerald-500",
        },
        {
            icon: Library,
            label: "Total Albums",
            value: stats.totalAlbums.toString(),
            bgColor: "bg-violet-500/10",
            iconColor: "text-violet-500",
        },
        {
            icon: Users2,
            label: "Total Artists",
            value: stats.totalArtists.toString(),
            bgColor: "bg-orange-500/10",
            iconColor: "text-orange-500",
        },
        {
            icon: PlayCircle,
            label: "Total Users",
            value: stats.totalUsers.toLocaleString(),
            bgColor: "bg-sky-500/10",
            iconColor: "text-sky-500",
        },
    ];

    return (
        <>Dashboard</>
    );
};
````

## File: src/pages/admin/components/SongTabContent.tsx
````typescript
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {Music} from "lucide-react";
import {SongsTable} from "@/pages/admin/components/SongsTable.tsx";
import AddSongDialog from "./AddSongDialog";

export const SongTabContent = () => {
    return (
        <Card>
            <CardHeader>
                <div className='flex items-center justify-between'>
                    <div>
                        <CardTitle className='flex items-center gap-2'>
                            <Music className='size-5 text-emerald-500'/>
                            Song Library
                        </CardTitle>
                        <CardDescription>
                            Manage your Music tracks
                        </CardDescription>
                    </div>
                    <AddSongDialog/>
                </div>
            </CardHeader>
            <CardContent>
                <SongsTable/>
            </CardContent>
        </Card>
    );
};
````

## File: src/pages/chat/components/UsersList.tsx
````typescript
import { useChatStore } from '@/stores/useChatStore';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import UsersListSkeleton from '@/components/skeletons/UsersListSkeleton';


const UsersList = () => {

    const { users, selectedUser, isLoading, setSelectedUser, onlineUsers } = useChatStore();

  return (
    <div className='border-r border-zinc-800'>
			<div className='flex flex-col h-full'>
				<ScrollArea className='h-[calc(100vh-280px)]'>
					<div className='space-y-2 p-4'>
						{isLoading ? (
							<UsersListSkeleton />
						) : (
							users.map((user) => (
								<div
									key={user._id}
									onClick={() => setSelectedUser(user)}
									className={`flex items-center justify-center lg:justify-start gap-3 p-3 
										rounded-lg cursor-pointer transition-colors
                    ${selectedUser?.clerkId === user.clerkId ? "bg-zinc-800" : "hover:bg-zinc-800/50"}`}
								>
									<div className='relative'>
										<Avatar className='size-8 md:size-12'>
											<AvatarImage src={user.imageUrl} alt={user.fullName || 'User'} />
											<AvatarFallback>
												{user.fullName ? user.fullName[0].toUpperCase() : 'U'}
											</AvatarFallback>
										</Avatar>
										{/* online indicator */}
										<div
											className={`absolute bottom-0 right-0 h-3 w-3 rounded-full ring-2 ring-zinc-900
                        ${onlineUsers.has(user.clerkId) ? "bg-green-500" : "bg-zinc-500"}`}
										/>
									</div>

									<div className='flex-1 min-w-0 lg:block hidden'>
										<span className='font-medium truncate'>{user.fullName || 'User'}</span>
									</div>
								</div>
							))
						)}
					</div>
				</ScrollArea>
			</div>
		</div>
  )
}

export default UsersList
````

## File: tsconfig.app.json
````json
{
  "compilerOptions": {
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.app.tsbuildinfo",
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "baseUrl": ".",
    "paths": {
      "@/*": [
        "./src/*"
      ]
    },
    

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,
    "jsx": "react-jsx",

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedSideEffectImports": true
  },
  "include": ["src"]
}
````

## File: tsconfig.json
````json
{
  "files": [],
  "references": [
    { "path": "./tsconfig.app.json" },
    { "path": "./tsconfig.node.json" }
  ],
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
````

## File: .gitignore
````
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
.qodo

# Environment variable files
.env
````

## File: README.md
````markdown
# 🎵 Spotify Clone

A full-stack Spotify-inspired music streaming web app built using modern technologies like React, TypeScript, Tailwind CSS, and Node.js. It supports features like user authentication, song streaming, and admin management.

![Spotify Clone Screenshot](https://martech.org/wp-content/uploads/2017/09/spotify-logo-1920x1080.jpg)

---

## 🚀 Tech Stack

**Frontend**  
- React 19 + TypeScript  
- Vite  
- Tailwind CSS + Tailwind Plugins  
- Zustand (State Management)  
- Radix UI + Lucide Icons  
- Axios, Socket.io-client  
- Clerk for authentication  

**Backend**  
- Node.js + Express  
- MongoDB + Mongoose  
- Clerk (User auth)  
- Socket.IO  
- Cloudinary (for media upload)

---

## 📦 Clone & Run the Project

### 🔧 Prerequisites

- Node.js and npm installed
- MongoDB set up (local or Atlas)
- [Clerk account](https://clerk.dev/) and keys
- Cloudinary account for media upload

---

### 🖥 Frontend Setup

```bash
git clone https://github.com/YourUsername/Spotify-Clone-frontend.git
cd Spotify-Clone-frontend
npm install
npm run dev
````

## File: src/components/SignInOAuthButtons.tsx
````typescript
import { useSignIn } from '@clerk/clerk-react'
import { Button } from './ui/button'

const SignInOAuthButtons = () => {

    const {signIn, isLoaded} = useSignIn()

    if(!isLoaded){
        return null
    }
    const signInWithGoogle = () =>{
        signIn.authenticateWithRedirect({
            strategy:"oauth_google",
            redirectUrl:"/sso-callback",
            redirectUrlComplete:"/auth-callback"
        })
    }

  return (
    <Button onClick={signInWithGoogle} variant={"secondary"} className='w-full text-white border-zinc-200 h-11'>
        Continue with Google
    </Button>
  )
}

export default SignInOAuthButtons
````

## File: src/components/TopBar.tsx
````typescript
import { SignedOut,  UserButton, } from '@clerk/clerk-react'
import { LayoutDashboardIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import SignInOAuthButtons from './SignInOAuthButtons'
import { useAuthStore } from '@/stores/useAuthStore'
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";


const TopBar = () => {
    const {isAdmin}= useAuthStore()
    console.log({isAdmin});
  return (
    <div className='flex items-center justify-between p-4 sticky top-0 bg-zinc-900/75 backdrop-blur-md z-10'>
        <div className='flex gap-2 items-center'>
            <img src="/spotify.png" alt="spotify logo" className='size-8'/>
            Spotify
        </div>
        <div className='flex items-center gap-4'>
            {isAdmin && (
                <Link to="/admin" className={cn(buttonVariants({ variant: "outline" }))}>
                    <LayoutDashboardIcon className='size-4 mr-2' />
                    Admin Dashboard
                </Link>
            )}

            
            <SignedOut>
                <SignInOAuthButtons/>
            </SignedOut>
            <UserButton/>
        </div>

    </div>
  )
}

export default TopBar
````

## File: src/index.css
````css
@import "tailwindcss";

@plugin "tailwindcss-animate";

@custom-variant dark (&:is(.dark *));

:root {
  --radius: 0.5rem;
  --background: oklch(1 0 0);
  --foreground: oklch(0.141 0.005 285.823);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.141 0.005 285.823);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.141 0.005 285.823);
  --primary: oklch(0.723 0.219 149.579);
  --primary-foreground: oklch(0.982 0.018 155.826);
  --secondary: oklch(0.967 0.001 286.375);
  --secondary-foreground: oklch(0.21 0.006 285.885);
  --muted: oklch(0.967 0.001 286.375);
  --muted-foreground: oklch(0.552 0.016 285.938);
  --accent: oklch(0.967 0.001 286.375);
  --accent-foreground: oklch(0.21 0.006 285.885);
  --destructive: oklch(0.577 0.245 27.325);
  --border: oklch(0.92 0.004 286.32);
  --input: oklch(0.92 0.004 286.32);
  --ring: oklch(0.723 0.219 149.579);
  --chart-1: oklch(0.646 0.222 41.116);
  --chart-2: oklch(0.6 0.118 184.704);
  --chart-3: oklch(0.398 0.07 227.392);
  --chart-4: oklch(0.828 0.189 84.429);
  --chart-5: oklch(0.769 0.188 70.08);
  --sidebar: oklch(0.985 0 0);
  --sidebar-foreground: oklch(0.141 0.005 285.823);
  --sidebar-primary: oklch(0.723 0.219 149.579);
  --sidebar-primary-foreground: oklch(0.982 0.018 155.826);
  --sidebar-accent: oklch(0.967 0.001 286.375);
  --sidebar-accent-foreground: oklch(0.21 0.006 285.885);
  --sidebar-border: oklch(0.92 0.004 286.32);
  --sidebar-ring: oklch(0.723 0.219 149.579);
}

.dark {
  --background: oklch(0.141 0.005 285.823);
  --foreground: oklch(0.985 0 0);
  --card: oklch(0.21 0.006 285.885);
  --card-foreground: oklch(0.985 0 0);
  --popover: oklch(0.21 0.006 285.885);
  --popover-foreground: oklch(0.985 0 0);
  --primary: oklch(0.696 0.17 162.48);
  --primary-foreground: oklch(0.393 0.095 152.535);
  --secondary: oklch(0.274 0.006 286.033);
  --secondary-foreground: oklch(0.985 0 0);
  --muted: oklch(0.274 0.006 286.033);
  --muted-foreground: oklch(0.705 0.015 286.067);
  --accent: oklch(0.274 0.006 286.033);
  --accent-foreground: oklch(0.985 0 0);
  --destructive: oklch(0.704 0.191 22.216);
  --border: oklch(1 0 0 / 10%);
  --input: oklch(1 0 0 / 15%);
  --ring: oklch(0.527 0.154 150.069);
  --chart-1: oklch(0.488 0.243 264.376);
  --chart-2: oklch(0.696 0.17 162.48);
  --chart-3: oklch(0.769 0.188 70.08);
  --chart-4: oklch(0.627 0.265 303.9);
  --chart-5: oklch(0.645 0.246 16.439);
  --sidebar: oklch(0.21 0.006 285.885);
  --sidebar-foreground: oklch(0.985 0 0);
  --sidebar-primary: oklch(0.696 0.17 162.48);
  --sidebar-primary-foreground: oklch(0.393 0.095 152.535);
  --sidebar-accent: oklch(0.274 0.006 286.033);
  --sidebar-accent-foreground: oklch(0.985 0 0);
  --sidebar-border: oklch(1 0 0 / 10%);
  --sidebar-ring: oklch(0.527 0.154 150.069);
}


@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-destructive-foreground: var(--destructive-foreground);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);
  --color-chart-1: var(--chart-1);
  --color-chart-2: var(--chart-2);
  --color-chart-3: var(--chart-3);
  --color-chart-4: var(--chart-4);
  --color-chart-5: var(--chart-5);
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
  --color-sidebar: var(--sidebar);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-ring: var(--sidebar-ring);
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }
  body {
    @apply bg-background text-foreground;
  }
}
````

## File: src/layout/component/FriendsActivity.tsx
````typescript
import { ScrollArea } from '@/components/ui/scroll-area'
import { useChatStore } from '@/stores/useChatStore'
import { HeadphonesIcon, Users, Music } from 'lucide-react'
import { useEffect } from 'react'
import { useUser } from '@clerk/clerk-react'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'

const FriendsActivity = () => {
    const { users, fetchUsers, onlineUsers, userActivities, isLoading } = useChatStore()
    const { user } = useUser()

    useEffect(() => {
        if (user) fetchUsers()
    }, [fetchUsers, user])

    return (
        <div className='h-full bg-zinc-900 rounded-lg flex flex-col'>
            <div className='p-4 flex justify-between items-center border-b border-zinc-800'>
                <div className='flex items-center gap-2'>
                    <Users className='size-5 shrink-0' />
                    <h2 className='font-semibold'>What they're listening to</h2>
                </div>
            </div>

            {!user ? (
                <LoginPrompt />
            ) : isLoading ? (
                <div className="flex-1 flex items-center justify-center">
                    <div className="text-zinc-400">Loading...</div>
                </div>
            ) : !users || users.length === 0 ? (
                <div className="flex-1 flex items-center justify-center">
                    <div className="text-zinc-400">No friends online</div>
                </div>
            ) : (
                <ScrollArea className='flex-1'>
                    <div className='p-4 space-y-4'>
                        {users.map((user) => {
                            const activity = userActivities.get(user.clerkId);
                            const isPlaying = activity && activity !== "Idle";
                            
                            return (
                                <div
                                    key={user._id}
                                    className='cursor-pointer hover:bg-zinc-800/50 p-3 rounded-md transition-colors group'
                                >
                                    <div className='flex items-start gap-3'>
                                        <div className='relative'>
                                            <Avatar className='size-10 border border-zinc-800'>
                                                <AvatarImage src={user.imageUrl} alt={user.fullName || 'User'} />
                                                <AvatarFallback>
                                                    {user.fullName ? user.fullName[0].toUpperCase() : 'U'}
                                                </AvatarFallback>
                                            </Avatar>
                                            <div
                                                className={`absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-zinc-900 
                                                    ${onlineUsers.has(user.clerkId) ? "bg-green-500" : "bg-zinc-500"}
                                                    `}
                                                aria-hidden='true'
                                            />
                                        </div>

                                        <div className='flex-1 min-w-0'>
                                            <div className='flex items-center gap-2'>
                                                <span className='font-medium text-sm text-white'>{user.fullName || 'User'}</span>
                                                {isPlaying && <Music className='size-3.5 text-emerald-400 shrink-0' />}
                                            </div>

                                            {isPlaying ? (
                                                <div className='mt-1'>
                                                    <div className='mt-1 text-sm text-white font-medium truncate'>
                                                        {activity.replace("Playing ", "").split(" by ")[0]}
                                                    </div>
                                                    <div className='text-xs text-zinc-400 truncate'>
                                                        {activity.split(" by ")[1]}
                                                    </div>
                                                </div>
                                            ) : (
                                                <div className='mt-1 text-xs text-zinc-400'>Idle</div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </ScrollArea>
            )}
        </div>
    )
}

export default FriendsActivity

const LoginPrompt = () => (
    <div className='h-full flex flex-col items-center justify-center p-6 text-center space-y-4'>
        <div className='relative'>
            <div
                className='absolute -inset-1 bg-gradient-to-r from-emerald-500 to-sky-500 rounded-full blur-lg
                opacity-75 animate-pulse'
                aria-hidden='true'
            />
            <div className='relative bg-zinc-900 rounded-full p-4'>
                <HeadphonesIcon className='size-8 text-emerald-400' />
            </div>
        </div>

        <div className='space-y-2 max-w-[250px]'>
            <h3 className='text-lg font-semibold text-white'>See What Friends Are Playing</h3>
            <p className='text-sm text-zinc-400'>Login to discover what music your friends are enjoying right now</p>
        </div>
    </div>
)
````

## File: src/layout/component/LeftSidebar.tsx
````typescript
import PlaylistSkeleton from '@/components/skeletons/PlaylistSkeleton'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { useMusicStore } from '@/stores/useMusicStore'
import { SignedIn } from '@clerk/clerk-react'
import { ScrollArea } from '@radix-ui/react-scroll-area'
import { HomeIcon, Library, MessageCircle } from 'lucide-react'
import  { useEffect } from 'react'
import { Link } from 'react-router-dom'

const LeftSidebar = () => {

  const {albums, fetchAlbums, isLoading} =useMusicStore();

  useEffect(() => {
    fetchAlbums();
  },[fetchAlbums]);

  console.log({albums});

  return (
    <div className='h-full flex flex-col gap-2'>
      {/* navigation menu */}
      <div className='rounded-lg bg-zinc-900 p-4'>
        <div className='space-y-2'>
          <Link to={"/"} className={cn(buttonVariants({
            variant: 'ghost',
            className: 'w-full justify-start text-white hover:bg-zinc-800'
          }))}>
            <HomeIcon className='mr-2 size-5'/>
            <span className='hidden md:inline'>Home</span>
          </Link>

          <SignedIn>
          <Link to={"/chat"} className={cn(buttonVariants({
            variant: 'ghost',
            className: 'w-full justify-start text-white hover:bg-zinc-800'
          }))}>
            <MessageCircle className='mr-2 size-5'/>
            <span className='hidden md:inline'>Messages</span>
          </Link>
          </SignedIn>
        </div>


      </div>
      {/* library section */}
      <div className='flex-1 rounded-lg bg-zinc-900 p-4'>
        <div className='flex items-center justify-between mb-4'>
          <div className='flex items-center text-white px-2'>
            <Library className='size-5 mr-2'/>
            <span className='hidden md:inline'>PlayLists</span>
          </div>
        </div>

        <ScrollArea className='h-[calc(100vh-300px)]'>
          <div className='space-y-2'>
            {isLoading ? <PlaylistSkeleton/> :(
              albums.map((albums) => (
                <Link to={`/albums/${albums._id}`}
                key={albums._id}
                className='p-2 hover:bg-zinc-800 rounded-md flex items-center gap-3 group cursor-pointer'
                >
                  <img src={albums.imageUrl} alt="playlist img" 
                  className='size-12 rounded-md flex-shrink-0 object-cover'
                  />

                  <div className='flex-1 min-w-0 hidden md:block'>
                    <p className='font-medium truncate'>
                      {albums.title}
                    </p>
                    <p className='text-sm text-zinc-400 truncate'>
                    Album •{albums.artist}
                    </p>

                  </div>
                </Link>
              ))
            )}
          </div>
        </ScrollArea>
      </div>


    </div>
  )
}

export default LeftSidebar
````

## File: src/main.tsx
````typescript
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ClerkProvider } from '@clerk/clerk-react'
import { BrowserRouter } from 'react-router-dom'
import AuthProvider from './provider/AuthProvider.tsx'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <AuthProvider>
      <BrowserRouter>
      <App />
      </BrowserRouter>
      </AuthProvider>
    </ClerkProvider>
  </StrictMode>,
)
````

## File: src/pages/admin/AdminPage.tsx
````typescript
import {useAuthStore} from "@/stores/useAuthStore.ts";

import {DashboardStats} from "@/pages/admin/components/DashboardStats.tsx";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs.tsx";
import {Album, Music} from "lucide-react";
import {SongTabContent} from "@/pages/admin/components/SongTabContent.tsx";
import {AlbumTabContent} from "@/pages/admin/components/AlbumTabContent.tsx";
import {useEffect} from "react";
import {useMusicStore} from "@/stores/useMusicStore.ts";
import Header from "@/pages/admin/components/Header.tsx";

export const AdminPage = () => {

    const  {isAdmin, isLoading} = useAuthStore()

    const {fetchAlbums, fetchSongs, fetchStats} =useMusicStore();


    useEffect(() => {
        fetchAlbums();
        fetchSongs();
        fetchStats();
    }, [fetchStats, fetchAlbums, fetchSongs]);

    if(!isAdmin && isLoading) return <div>Unauthorized</div>

    return (
        <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-900
        to-black text-zinc-100 p-8">
            <Header/>
            <DashboardStats/>

            <Tabs defaultValue='songs' className='space-y-6'>
                <TabsList className='p-1 bg-zinc-800/50'>
                    <TabsTrigger value="songs" className='data-[state=active]:bg-zinc-700'>
                        <Music className='mr-2 size-4'/>
                        Songs
                    </TabsTrigger>
                    <TabsTrigger value="albums" className='data-[state=active]:bg-zinc-700'>
                        <Album className='mr-2 size-4'/>
                        Albums
                    </TabsTrigger>
                </TabsList>
                <TabsContent value="songs">
                    <SongTabContent/>
                </TabsContent>
                <TabsContent value="albums">
                    <AlbumTabContent/>
                </TabsContent>
            </Tabs>
        </div>
    );
};
````

## File: src/pages/admin/components/AlbumTabContent.tsx
````typescript
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Library } from "lucide-react";
import AlbumsTable from "./AlbumsTable";
import AddAlbumDialog from "./AddAlbumDialog";
export const AlbumTabContent = () => {
    return (
        <Card className='bg-zinc-800/50 border-zinc-700/50'>
			<CardHeader>
				<div className='flex items-center justify-between'>
					<div>
						<CardTitle className='flex items-center gap-2'>
							<Library className='h-5 w-5 text-violet-500' />
							Albums Library
						</CardTitle>
						<CardDescription>Manage your album collection</CardDescription>
					</div>
					<AddAlbumDialog />
				</div>
			</CardHeader>

			<CardContent>
				<AlbumsTable />
			</CardContent>
		</Card>
    );
};
````

## File: src/stores/usePlayerStore.ts
````typescript
import {create} from "zustand"
import { Song } from "@/types"
import { useChatStore } from "./useChatStore";

interface PlayStore {
    currentSong: Song | null;
    isPlaying: boolean;
    queue: Song[];
    currentIndex: number;

    initializeQueue: (songs: Song[]) => void;
    playAlbum: (songs: Song[], startIndex?: number) => void;
    setCurrentSong: (song: Song | null) => void;
    togglePlay: () => void;
	playNext: () => void;
	playPrevious: () => void;
}

export const usePlayStore = create<PlayStore>((set, get) =>({
    currentSong: null,
	isPlaying: false,
	queue: [],
	currentIndex: -1,

    initializeQueue: (songs: Song[]) => {

        set({
            queue: songs,
            currentSong: get().currentSong || songs[0],
            currentIndex: get().currentIndex === -1 ? 0 : get().currentIndex
        })
    },



    playAlbum: (songs: Song[], startIndex = 0) => {
        if (songs.length ===0) return;

        const song =songs[startIndex];

        const socket = useChatStore.getState().socket;
        if (socket.auth) {
			socket.emit("update_activity", {
				userId: socket.auth.userId,
				activity: `Playing ${song.title} by ${song.artist}`,
			});
		}


        set({
            queue: songs,
            currentSong: song,
            currentIndex: startIndex,
			isPlaying: true,
        })
    },
    setCurrentSong: (song: Song | null) => {
        if (!song) return;

        const socket = useChatStore.getState().socket;
		if (socket.auth) {
			socket.emit("update_activity", {
				userId: socket.auth.userId,
				activity: `Playing ${song.title} by ${song.artist}`,
			});
		}

        const songIndex = get().queue.findIndex(s => s._id === song._id);
		set({
			currentSong: song,
			isPlaying: true,
			currentIndex: songIndex !== -1 ? songIndex : get().currentIndex,
		});
    },
    togglePlay: () => {
        const willStartPlaying = !get().isPlaying;

        const currentSong = get().currentSong;
		const socket = useChatStore.getState().socket;
		if (socket.auth) {
			socket.emit("update_activity", {
				userId: socket.auth.userId,
				activity:
					willStartPlaying && currentSong ? `Playing ${currentSong.title} by ${currentSong.artist}` : "Idle",
			});
		}

        set({
			isPlaying: willStartPlaying,
		});
    },
    playNext: () => {
        const { currentIndex, queue} = get();
        const nextIndex = currentIndex + 1;

        if (nextIndex < queue.length) {
            const nextSong = queue[nextIndex];

            const socket = useChatStore.getState().socket;
			if (socket.auth) {
				socket.emit("update_activity", {
					userId: socket.auth.userId,
					activity: `Playing ${nextSong.title} by ${nextSong.artist}`,
				});
			}

            set({
                currentSong: nextSong,
                currentIndex: nextIndex,
                isPlaying: true,
            });
        } else {
            set({ isPlaying: false});

            const socket = useChatStore.getState().socket;
			if (socket.auth) {
				socket.emit("update_activity", {
					userId: socket.auth.userId,
					activity: `Idle`,
				});
			}
        }
    },
    playPrevious: () => {
        const { currentIndex, queue} = get();
        const prevIndex = currentIndex - 1;

        if(prevIndex >=0) {
            const prevSong = queue[prevIndex];

            const socket = useChatStore.getState().socket;
			if (socket.auth) {
				socket.emit("update_activity", {
					userId: socket.auth.userId,
					activity: `Playing ${prevSong.title} by ${prevSong.artist}`,
				});
			}

            set({
                currentSong: prevSong,
                currentIndex: prevIndex,
                isPlaying: true,
            })
        } else {
            set({ isPlaying: false});

            const socket = useChatStore.getState().socket;
			if (socket.auth) {
				socket.emit("update_activity", {
					userId: socket.auth.userId,
					activity: `Idle`,
				});
			}
        }
    },
}))
````

## File: vite.config.ts
````typescript
import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server:{
    port:3000
  }
})
````

## File: src/layout/component/AudioPlayer.tsx
````typescript
import { usePlayStore } from '@/stores/usePlayerStore';
import { useEffect, useRef } from 'react'

const AudioPlayer = () => {

    const audioRef =useRef<HTMLAudioElement>(null);
    const prevSongRef = useRef<string | null>(null);

    const { currentSong, isPlaying, playNext} = usePlayStore();

    //handle play/pause logic
    useEffect(() => {
        if(isPlaying) audioRef.current?.play();
        else audioRef.current?.pause();
    },[isPlaying])

    //handle song ends
    useEffect(() => {
        const audio = audioRef.current;

        const handleEnded = () => {
            playNext()
        }

        audio?.addEventListener("ended", handleEnded)
    },[playNext]);

    // handle song changes
    useEffect(() => {
        if(!audioRef.current || !currentSong) return;

        const audio = audioRef.current;

        //check if this is a new song?
        const isSongChange = prevSongRef.current !== currentSong?.audioUrl;
        if(isSongChange) {
            audio.src = currentSong?.audioUrl;
            // reset the play back position
            audio.currentTime = 0;

            prevSongRef.current = currentSong?.audioUrl;
            
            if(isPlaying) audio.play();
        }
    },[currentSong, isPlaying]);

  return <audio ref={audioRef}/>
}

export default AudioPlayer
````

## File: src/pages/auth-callback/AuthCallBackPage.tsx
````typescript
import { Card, CardContent } from "@/components/ui/card";
import { axiosInstance } from "@/lib/axios";
import { useUser } from "@clerk/clerk-react";
import { Loader } from "lucide-react";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const AuthCallbackPage = () => {
	const { isLoaded, user } = useUser();
	const navigate = useNavigate();
	const syncAttempted = useRef(false);

	useEffect(() => {
		const syncUser = async () => {
			if (!isLoaded || !user || syncAttempted.current) return;

			try {
				syncAttempted.current = true;

				await axiosInstance.post("/auth/callback", {
					id: user.id,
					firstName: user.firstName,
					lastName: user.lastName,
					imageUrl: user.imageUrl,
				});
			} catch (error) {
				console.log("Error in auth callback", error);
			} finally {
				navigate("/");
			}
		};

		syncUser();
	}, [isLoaded, user, navigate]);

	return (
		<div className='h-screen w-full bg-black flex items-center justify-center'>
			<Card className='w-[90%] max-w-md bg-zinc-900 border-zinc-800'>
				<CardContent className='flex flex-col items-center gap-4 pt-6'>
					<Loader className='size-6 text-emerald-500 animate-spin' />
					<h3 className='text-zinc-400 text-xl font-bold'>Logging you in</h3>
					<p className='text-zinc-400 text-sm'>Redirecting...</p>
				</CardContent>
			</Card>
		</div>
	);
};
export default AuthCallbackPage;
````

## File: src/pages/home/component/FeaturedSection.tsx
````typescript
import FeaturedGridSkeleton from '@/components/skeletons/FeaturedGridSkeleton'
import { useMusicStore } from '@/stores/useMusicStore'
import {PlayButton} from "@/pages/home/component/PlayButton.tsx";


const FeaturedSection = () => {

    const {isLoading, featuredSongs, error}= useMusicStore();

    if(isLoading) return <FeaturedGridSkeleton/>
    if(error) return <p className='text-red-500 mb-4 text-lg'>{error}</p>

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8'>
      {featuredSongs.map((song) => (
        <div key={song._id}
        className='flex items-center bg-zinc-800/50 rounded-md overflow-hidden
         hover:bg-zinc-700/50 transition-colors group cursor-pointer relative'>

          <img src={song.imageUrl} alt={song.title} className='w-16 sm:w-20 h-16 sm:h-20 object-cover flex-shrink-0'/>
          <div className='flex-1 p-4'>
          <p className='font-medium truncate'>{song.title}</p>
          <p className='text-sm text-zinc-400 truncate'>{song.artist}</p>
          </div>

            <PlayButton song={song}/>
        </div>

      ))}
    </div>
  )
}

export default FeaturedSection
````

## File: src/provider/AuthProvider.tsx
````typescript
import { axiosInstance } from "@/lib/axios";
import { useAuthStore } from "@/stores/useAuthStore";
import { useChatStore } from "@/stores/useChatStore";
import { useAuth } from "@clerk/clerk-react"
import { Loader } from "lucide-react";
import React, { useEffect, useState } from "react"


const updateApitoken = (token: string | null) => {
    if (token) axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    else delete axiosInstance.defaults.headers.common["Authorization"];
}

const AuthProvider = ({children}:{ children:React.ReactNode}) =>{
    const {getToken, userId } = useAuth()
    const [loading, setLoading] = useState(true)
    const {checkAdminStatus} = useAuthStore();
    const {initSocket, disconnectSocket} = useChatStore();

    useEffect(() => {
        const initAuth =  async () =>{
            try {
                const token = await getToken();
                updateApitoken(token);
                if(token){
                    await checkAdminStatus();
                    //init socket
                    if(userId){
                        initSocket(userId);
                    }
                }
            } catch (error:any) {
                updateApitoken(null);
                console.log("Error in auth provider",error)
            } finally{
                setLoading(false);
            }
        };
        initAuth();
        return () => {
            disconnectSocket();
        }
    },[getToken, userId, checkAdminStatus, initSocket, disconnectSocket]);

    if(loading) return (
    <div className="h-screen w-full flex items-center justify-center">
        <Loader className="animate-spin h-10 w-10 text-blue-500" />
    </div>)

    return <>{children}</>
};

export default AuthProvider
````

## File: src/stores/useChatStore.ts
````typescript
import { axiosInstance } from "@/lib/axios";
import { Message, User } from "@/types";
import { create } from "zustand";
import { io } from "socket.io-client";
import { persist } from 'zustand/middleware';

interface ChatStore {
  users: User[];
	isLoading: boolean;
	error: string | null;
	socket: any;
	isConnected: boolean;
	onlineUsers: Set<string>;
	userActivities: Map<string, string>;
	messages: Message[];
  selectedUser: User | null;

	fetchUsers: () => Promise<void>;
	initSocket: (userId: string) => void;
	disconnectSocket: () => void;
	sendMessage: (receiverId: string, senderId: string, content: string) => void;
  fetchMessages: (userId: string) => Promise<void>;
	setSelectedUser: (user: User | null) => void;
}

const baseUrl = import.meta.env.MODE === "development" ? "https://spotify-clone-backend-ruddy.vercel.app" : "/"

const socket = io(baseUrl,{
  autoConnect: false,
  withCredentials: true,
})

export const useChatStore = create<ChatStore>()(
  persist(
    (set, get) => ({
      users: [],
      isLoading: false,
      error: null,
      socket: socket,
      isConnected: false,
      onlineUsers: new Set(),
      userActivities: new Map(),
      messages: [],
      selectedUser: null,

      setSelectedUser: (user) => set({ selectedUser: user }),

      fetchUsers: async () =>{
        set({ isLoading: true, error: null });
        try {
            const response = await axiosInstance.get("/users");
            set({ users: response.data});
        } catch (error: any) {
            set({ error: error.response.data.message });
        } finally {
            set({ isLoading: false });
        }
      },

      initSocket: (userId) => {
        if (!get().isConnected) {
          socket.auth = { userId };
          socket.connect();

          socket.emit("user_connected", userId);

          socket.on("users_online", (users: string[]) => {
            set({ onlineUsers: new Set(users) });
          });

          socket.on("activities", (activities: [string, string][]) => {
            set({ userActivities: new Map(activities) });
          });

          socket.on("user_connected", (userId: string) => {
            set((state) => ({
              onlineUsers: new Set([...state.onlineUsers, userId]),
            }));
          });

          socket.on("user_disconnected", (userId: string) => {
            set((state) => {
              const newOnlineUsers = new Set(state.onlineUsers);
              newOnlineUsers.delete(userId);
              return { onlineUsers: newOnlineUsers };
            });
          });

          socket.on("receive_message", (message: Message) => {
            set((state) => {
              const messageExists = state.messages.some(m => m._id === message._id);
              if (!messageExists) {
                return {
                  messages: [...state.messages, message],
                };
              }
              return state;
            });
          });

          socket.on("message_sent", (message: Message) => {
            set((state) => {
              const messageExists = state.messages.some(m => m._id === message._id);
              if (!messageExists) {
                return {
                  messages: [...state.messages, message],
                };
              }
              return state;
            });
          });

          socket.on("activity_updated", ({ userId, activity }) => {
            set((state) => {
              const newActivities = new Map(state.userActivities);
              newActivities.set(userId, activity);
              return { userActivities: newActivities };
            });
          });

          set({ isConnected: true });
        }
      },

      disconnectSocket: () => {
        if (get().isConnected) {
          socket.disconnect();
          set({ isConnected: false });
        }
      },

      sendMessage: async (receiverId, senderId, content) => {
        const socket = get().socket;
        if (!socket) return;

        socket.emit("send_message", { receiverId, senderId, content });
      },

      fetchMessages: async (userId: string) => {
        set({ isLoading: true, error: null });
        try {
          const response = await axiosInstance.get(`/users/messages/${userId}`);
          set({ messages: response.data });
        } catch (error: any) {
          set({ error: error.response.data.message });
        } finally {
          set({ isLoading: false });
        }
      },
    }),
    {
      name: 'chat-storage',
      partialize: (state) => ({ selectedUser: state.selectedUser }),
    }
  )
);
````

## File: src/layout/MainLayout.tsx
````typescript
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable'
import {useEffect, useState} from 'react'
import { Outlet } from 'react-router-dom'
import LeftSidebar from './component/LeftSidebar';
import FriendsActivity from './component/FriendsActivity';
import AudioPlayer from './component/AudioPlayer';
import {PlaybackControls} from "@/layout/component/PlaybackControls.tsx";

const MainLayout = () => {

    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

  return (
    <div className='h-screen bg-black text-white flex flex-col'>
        <ResizablePanelGroup direction='horizontal' className='flex-1 flex h-full overflow-hidden p-2'>
            <AudioPlayer/>
            {/* lest sidebar */}
            <ResizablePanel defaultSize={20} minSize={isMobile ?0: 10} maxSize={30}>
                
                <LeftSidebar/>
            </ResizablePanel>
            <ResizableHandle className='w-2 bg-black rounded-lg transition-colors'/>
            {/* Main content */}
            <ResizablePanel defaultSize={isMobile ? 80 : 60}>
                <Outlet/>
            </ResizablePanel>
            {!isMobile && (
                <>
                    <ResizableHandle className='w-2 bg-black rounded-lg transition-colors'/>
                    {/* Right sidebar */}
                    <ResizablePanel defaultSize={20} minSize={0} maxSize={25} collapsedSize={0}>
                        <FriendsActivity/>
                    </ResizablePanel>
                </>
            )}
        </ResizablePanelGroup>
        <PlaybackControls/>
    </div>
  )
}

export default MainLayout
````

## File: src/pages/chat/ChatPage.tsx
````typescript
import { useEffect } from 'react'
import { useChatStore } from '@/stores/useChatStore';
import { useUser } from '@clerk/clerk-react';
import TopBar from '@/components/TopBar';
import UsersList from './components/UsersList';
import ChatHeader from './components/ChatHeader';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import MessageInput from './components/MessageInput';

const formatTime = (date: string) => {
	try {
		const parsedDate = new Date(date);
		if (isNaN(parsedDate.getTime())) {
			return '';
		}
		return parsedDate.toLocaleTimeString("en-US", {
			hour: "2-digit",
			minute: "2-digit",
			hour12: true,
		});
	} catch (error) {
		return '';
	}
};

const ChatPage = () => {
  const {user} = useUser();
  const {messages, selectedUser, fetchUsers, fetchMessages, initSocket, disconnectSocket} = useChatStore();
  console.log("message data",messages);

  // Initialize socket connection and fetch users when user is available
  useEffect(() => {
    if (user) {
      fetchUsers();
      initSocket(user.id);
    }
    return () => {
      disconnectSocket();
    };
  }, [user, fetchUsers, initSocket, disconnectSocket]);

  // Fetch messages when selectedUser changes or on page load if selectedUser exists
  useEffect(() => {
    if (selectedUser && user) {
      fetchMessages(selectedUser.clerkId);
    }
  }, [selectedUser, user, fetchMessages]);

  return (
    <main className='h-full rounded-lg bg-gradient-to-b from-zinc-800 to-zinc-900 overflow-hidden'>
      <TopBar />
      <div className='grid lg:grid-cols-[300px_1fr] grid-cols-[80px_1fr] h-[calc(100vh-180px)]'>
        <UsersList />
        {/* chat message */}
				<div className='flex flex-col h-full'>
					{selectedUser ? (
						<>
							<ChatHeader />

							{/* Messages */}
							<ScrollArea className='h-[calc(100vh-340px)]'>
								<div className='p-4 space-y-4'>
									{messages.map((message) => (
										<div
											key={message._id}
											className={`flex items-start gap-3 ${
												message.senderId === user?.id ? "flex-row-reverse" : ""
											}`}
										>
											<Avatar className='size-8'>
												<AvatarImage
													src={
														message.senderId === user?.id
															? user.imageUrl
															: selectedUser.imageUrl
													}
												/>
											</Avatar>

											<div
												className={`rounded-lg p-3 max-w-[70%]
													${message.senderId === user?.id ? "bg-green-500" : "bg-zinc-800"}
												`}
											>
												<p className='text-sm'>{message.content}</p>
												<span className='text-xs text-zinc-300 mt-1 block'>
													{formatTime(message.createdAt)}
												</span>
											</div>
										</div>
									))}
								</div>
							</ScrollArea>

							<MessageInput />
						</>
					) : (
						<NoConversationPlaceholder />
					)}
				</div>
      </div>

    </main>
  )
}

export default ChatPage;

const NoConversationPlaceholder = () => (
	<div className='flex flex-col items-center justify-center h-full space-y-6'>
		<img src='/spotify.png' alt='Spotify' className='size-16 animate-bounce' />
		<div className='text-center'>
			<h3 className='text-zinc-300 text-lg font-medium mb-1'>No conversation selected</h3>
			<p className='text-zinc-500 text-sm'>Choose a friend to start chatting</p>
		</div>
	</div>
);
````

## File: src/pages/home/component/SectionGrid.tsx
````typescript
import { Song } from '@/types';
import SectionGridSkeleton from './SectionGridSkeleton';
import { Button } from '@/components/ui/button';
import {PlayButton} from "@/pages/home/component/PlayButton.tsx";

type SectionGridProps = {
  title: string;
  songs: Song[];
  isLoading: boolean;
}

const SectionGrid = ({ songs, title, isLoading}:SectionGridProps) => {
  if(isLoading) return <SectionGridSkeleton/>;
  console.log(title,songs)
  return (
    <div className='mb-8'>
      <div className='flex items-center justify-between mb-4'>
        <h2 className='text-xl sm:text-2xl font-bold'>{title}</h2>
        <Button variant='link' className='text-sm text-zinc-400 hover:text-white'>
          show all
        </Button>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
        {songs.map((song) => (
          <div key={song._id} 
          className='bg-zinc-800/40 p-4 rounded-md hover:bg-zinc-700/40 transition-all group cursor-pointer'>
            <div className='relative mb-4'>
              <div className='aspect-square rounded-md shadow-lg overflow-hidden'>
                <img src={song.imageUrl} alt={song.title} 
                className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-105'/>
              </div>
                <PlayButton song={song}/>
            </div>
            <h3 className='font-medium mb-2 truncate'>
              {song.title}
            </h3>
            <p className='text-sm text-zinc-400 truncate'>
              {song.artist}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SectionGrid
````

## File: src/pages/home/HomePage.tsx
````typescript
import TopBar from '@/components/TopBar'
import { useEffect } from 'react'
import { useMusicStore } from "@/stores/useMusicStore";
import FeaturedSection from './component/FeaturedSection';
import { ScrollArea } from '@/components/ui/scroll-area';
import SectionGrid from './component/SectionGrid';
import {usePlayStore} from "@/stores/usePlayerStore.ts";

const HomePage = () => {
  const {
		fetchFeaturedSongs,
		fetchMadeForYouSongs,
		fetchTrendingSongs,
		isLoading,
		madeForYouSongs,
		featuredSongs,
		trendingSongs,
	} = useMusicStore();

  const { initializeQueue } = usePlayStore();

  useEffect(() => {
		fetchFeaturedSongs();
		fetchMadeForYouSongs();
		fetchTrendingSongs();
	}, [fetchFeaturedSongs, fetchMadeForYouSongs, fetchTrendingSongs]);

	useEffect(() => {
		if (madeForYouSongs.length > 0 && featuredSongs.length > 0 && trendingSongs.length > 0) {
			const allSongs = [...madeForYouSongs, ...featuredSongs, ...trendingSongs];
			initializeQueue(allSongs);
		}
	}, [initializeQueue, madeForYouSongs, featuredSongs, trendingSongs]);



  return (
    <main className='rounded-md overflow-hidden h-full bg-gradient-to-b from-zinc-800 to-zinc-900'>
      <TopBar/>
      <ScrollArea className='h-[calc(100vh-180px)]'>
		<div className='p-4 sm:p-6'>
			<h1 className='text-2xl sm:text-3xl font-bold mb-6'>Good afternoon</h1>
			<FeaturedSection/>
		
		<div className='space-y-8'>
			<SectionGrid title="Made For You" songs={madeForYouSongs} isLoading={isLoading}/>
			<SectionGrid title="Trending" songs={trendingSongs} isLoading={isLoading}/>
		</div>
		</div>
	  </ScrollArea>
    </main>
  )
}

export default HomePage
````

## File: src/pages/album/AlbumPage.tsx
````typescript
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useMusicStore } from '@/stores/useMusicStore';
import { usePlayStore } from '@/stores/usePlayerStore';
import { Clock, Play } from 'lucide-react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const formatDuration = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
};

const AlbumPage = () => {
    const { albumId } = useParams();
    const { fetchAlbumById, currentAlbum, isLoading } = useMusicStore();
    const {currentSong, isPlaying, playAlbum, togglePlay}=usePlayStore();

    useEffect(() => {
        if (albumId) fetchAlbumById(albumId);


    }, [fetchAlbumById, albumId]);

    console.log("Album Data:", currentAlbum);
    console.log("Songs:", currentAlbum?.songs);

    if (isLoading) return null;


    const handlePlayAlbum = () => {
		if (!currentAlbum) return;

		const isCurrentAlbumPlaying = currentAlbum?.songs.some((song) => song._id === currentSong?._id);
		if (isCurrentAlbumPlaying) togglePlay();
		else {
			// start playing the album from the beginning
			playAlbum(currentAlbum?.songs, 0);
		}
	};

    const handlePlaySong = (index: number) =>{
        if (!currentAlbum) return

        playAlbum(currentAlbum?.songs,index);
    }
    
    return (
        <div className='h-full'>
            <ScrollArea className='h-full rounded-md'>
                <div className='relative min-h-full'>
                    <div
                        className='absolute inset-0 bg-gradient-to-b from-[#5038a0]/80 via-zinc-900/80
                        to-zinc-900 '
                           aria-hidden='true'
                    >
                        {/* content */}
                        <div className='relative z-10'>
                            <div className='flex p-6 gap-6 pb-8'>
                                <img
                                    src={currentAlbum?.imageUrl}
                                    alt={currentAlbum?.title}
                                    className='w-[240px] h-[240px] shadow-xl rounded'
                                    onError={() => console.error("Image failed to load:", currentAlbum?.imageUrl)}
                                />
                                <div className='flex flex-col justify-end'>
                                    <p className='text-sm font-medium'>Album</p>
                                    <h1 className='text-7xl font-bold my-4'>{currentAlbum?.title}</h1>
                                    <div className='flex items-center gap-2 text-sm text-zinc-100'>
                                        <span className='font-medium text-white'>{currentAlbum?.artist}</span>
                                        <span>{currentAlbum?.songs?.length} songs</span>
                                        <span>{currentAlbum?.releaseYear}</span>
                                    </div>
                                </div>
                            </div>
                            {/* play button */}
                            <div className='px-6 pb-4 flex items-center gap-6'>
                                <Button
                                    onClick={handlePlayAlbum}
                                    size='icon'
                                    className='w-14 h-14 rounded-full bg-green-500 hover:bg-green-400 
                hover:scale-105 transition-all'
                                >
                                    <Play className='h-7 w-7 text-black' />
                                </Button>
                            </div>
                            {/* table section */}
                            <div className='bg-black/20 backdrop-blur-sm'>
                                {/* table header */}
                                <div className='grid grid-cols-[16px_4fr_2fr_1fr] gap-4 px-10 py-2 text-sm 
            text-zinc-400 border-b border-white/5'>
                                    <div>#</div>
                                    <div>Title</div>
                                    <div>Release Date</div>
                                    <div>
                                        <Clock className='h-4 w-4' />
                                    </div>
                                </div>

                                {/* song list */}
                                <div className='px-6'>
                                    <div className='space-y-2 py-4'>
                                        {currentAlbum?.songs?.map((song, index) => {
                                            const isCurrentSong = currentSong?._id === song._id;
                                            return(
                                            <div
                                                key={song._id}
                                                onClick={() => handlePlaySong(index)}
                                                className={`grid grid-cols-[16px_4fr_2fr_1fr] gap-4 px-4 py-2 text-sm 
                                                text-zinc-400 hover:bg-white/5 rounded-md group cursor-pointer`}
                                            >
                                                <div className='flex items-center justify-center'>
                                                    {isCurrentSong && isPlaying ? (
                                                        <div className='size-4 text-green-500'>♫</div>
                                                    ):(
                                                        <span className='group-hover:hidden'>{index + 1}</span>
                                                    )}
                                                    {!isCurrentSong && (
														<Play className='h-4 w-4 hidden group-hover:block' />
													)}
                                                </div>
                                                <div className='flex items-center gap-3'>
                                                    <img src={song.imageUrl} alt={song.title} className='size-10' />
                                                    <div>
                                                        <div className={`font-medium text-white`}>{song.title}</div>
                                                        <div>{song.artist}</div>
                                                    </div>
                                                </div>
                                                <div className='flex items-center'>{song.createdAt.split("T")[0]}</div>
                                                <div className='flex items-center'>{formatDuration(song.duration)}</div>
                                            </div>
                                        )})}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ScrollArea>
        </div>
    );
};

export default AlbumPage;
````

## File: src/stores/useMusicStore.ts
````typescript
import { axiosInstance } from "@/lib/axios";
import {Album, Song, Stats} from "@/types";
import { toast } from "react-hot-toast";
import { create } from "zustand";

interface MusicStore {
    songs: Song[]; 
    albums: Album[];
    isLoading: boolean;
    error: string | null;
    currentAlbum: Album | null;
    madeForYouSongs: Song[];
    featuredSongs: Song[];
    trendingSongs: Song[];
    stats: Stats;

    fetchAlbums: () => Promise<void>;
    fetchAlbumById: (id: string) => Promise<void>;
    fetchMadeForYouSongs: () => Promise<void>;
    fetchFeaturedSongs: () => Promise<void>;
    fetchTrendingSongs: () => Promise<void>;
    fetchStats: () => Promise<void>;
    fetchSongs: () => Promise<void>;
    deleteSong: (id: string) => Promise<void>;
    deleteAlbum: (id: string) => Promise<void>;
}

export const useMusicStore = create<MusicStore>((set) => ({
    albums: [],
    songs: [],
    isLoading: false,
    error: null,
    currentAlbum: null,
    madeForYouSongs: [],
    featuredSongs: [],
    trendingSongs: [],
    stats: {
        totalAlbums: 0,
        totalSongs: 0,
        totalUsers: 0,
        totalArtists: 0
    },

    deleteAlbum: async (id) => {
        set({ isLoading: true, error: null });
        try {
            await axiosInstance.delete(`/admin/albums/${id}`);
            set(state => ({
                albums: state.albums.filter(album => album._id !== id),
                songs: state.songs.map(song => 
                    song.albumId === state.albums.find((a) => a._id === id)?.title ? {...song, album: null} : song),
            }));
            toast.success("Album deleted successfully");
        } catch (error: any) {
            set({ error: error.response.data.message });
            toast.error("Failed to delete album"+error.message);
        } finally {
            set({ isLoading: false });
        }
    },
    deleteSong: async (id) => {
        set({ isLoading: true, error: null });
        try {
            await axiosInstance.delete(`/admin/songs/${id}`);
            set(state => ({
                songs: state.songs.filter(song => song._id !== id),
            }));
            toast.success("Song deleted successfully");
        } catch (error: any) {
            set({ error: error.response.data.message });
            toast.error("Failed to delete song"+error.message);
        } finally {
            set({ isLoading: false });
        }
    },

    fetchSongs: async () => {
        set({ isLoading: true, error: null });


        try {
            const response = await axiosInstance.get("/songs");
            set({ songs: response.data });
            console.log("check song:",response.data);
            console.log("hello song");
        } catch (error: any) {
            set({ error: error.message });
        } finally {
            set({ isLoading: false });
        }
    },

    fetchStats: async () => {
        set({ isLoading: true, error: null });
        console.log("stats start");
        try {
            const response = await axiosInstance.get("/stats");
            console.log("check stats:",response.data);
            console.log("hello stats");
            set({ stats: response.data });
        } catch (error: any) {
            set({ error: error.message });
        } finally {
            set({ isLoading: false });
        }
    },



    fetchAlbums: async () => {
        set({ isLoading: true, error: null });

        try {
            const response = await axiosInstance.get("/albums");
            set({ albums: response.data });
            console.log("check album:",response.data);
        } catch (error: any) {
            set({ error: error?.response?.data?.message || "An error occurred" });
        } finally {
            set({ isLoading: false });
        }
    },

    fetchAlbumById: async (id: string) => {
        set({ isLoading: true, error: null });
        try {
            const response = await axiosInstance.get(`/albums/${id}`);
            set({ currentAlbum: response.data });
        } catch (error: any) {
            set({ error: error?.response?.data?.message || "An error occurred" });
        } finally {
            set({ isLoading: false });
        }
    },

    fetchFeaturedSongs: async () =>{
        set({ isLoading: true, error: null});
        try {
            const response = await axiosInstance.get("/songs/featured");
            set({ featuredSongs: response.data})
        } catch (error: any) {
            set({error: error.response.data.message})
        } finally{
            set({ isLoading: false});
        }
    },
    fetchMadeForYouSongs: async () =>{
        set({ isLoading: true, error: null});
        try {
            const response = await axiosInstance.get("/songs/made-for-you");
            set({ madeForYouSongs: response.data})
        } catch (error: any) {
            set({error: error.response.data.message})
        } finally{
            set({ isLoading: false});
        }
    },
    fetchTrendingSongs: async () =>{
        set({ isLoading: true, error: null});
        try {
            const response = await axiosInstance.get("/songs/trending");
            set({ trendingSongs: response.data})
        } catch (error: any) {
            set({error: error.response.data.message})
        } finally{
            set({ isLoading: false});
        }
    }
}));
````

## File: src/types/index.ts
````typescript
export interface Song {
    _id: string;
    title: string;
    artist: string;
    albumId: string | null;
    imageUrl: string;
    audioUrl: string;
    duration: number;
    createdAt: string;
    updatedAt: string;
}

export interface Album {
    _id: string;
    title: string;
    artist: string;
    imageUrl: string;
    releaseYear: number;
    songs: Song[];
}

export interface Stats {
    totalSongs: number;
    totalAlbums: number;
    totalUsers: number;
    totalArtists: number;
}

export interface Message {
    _id: string;
    senderId: string;
    receiverId: string;
    content: string;
    createdAt: string;
    updatedAt: string;
}

export interface User {
	_id: string;
	clerkId: string;
	fullName: string;
	imageUrl: string;
}
````

## File: package.json
````json
{
  "name": "frontend",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "@clerk/clerk-react": "^5.24.1",
    "@radix-ui/react-avatar": "^1.1.3",
    "@radix-ui/react-dialog": "^1.1.6",
    "@radix-ui/react-scroll-area": "^1.2.3",
    "@radix-ui/react-select": "^2.1.6",
    "@radix-ui/react-slider": "^1.2.3",
    "@radix-ui/react-slot": "^1.1.2",
    "@radix-ui/react-tabs": "^1.1.3",
    "@tailwindcss/vite": "^4.0.9",
    "axios": "^1.8.2",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "ldrs": "^1.1.2",
    "lucide-react": "^0.477.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "react-hot-toast": "^2.5.2",
    "react-resizable-panels": "^2.1.7",
    "react-router-dom": "^7.3.0",
    "socket.io-client": "^4.8.1",
    "tailwind-merge": "^3.0.2",
    "tailwindcss-animate": "^1.0.7",
    "zustand": "^5.0.3"
  },
  "devDependencies": {
    "@eslint/js": "^9.21.0",
    "@types/node": "^22.13.9",
    "@types/react": "^19.0.10",
    "@types/react-dom": "^19.0.4",
    "@vitejs/plugin-react": "^4.3.4",
    "autoprefixer": "^10.4.20",
    "eslint": "^9.21.0",
    "eslint-plugin-react-hooks": "^5.1.0",
    "eslint-plugin-react-refresh": "^0.4.19",
    "globals": "^15.15.0",
    "postcss": "^8.5.3",
    "tailwindcss": "^4.0.9",
    "typescript": "~5.7.2",
    "typescript-eslint": "^8.24.1",
    "vite": "^6.2.0"
  }
}
````

## File: src/App.tsx
````typescript
import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/home/HomePage"
import AuthCallBackPage from "./pages/auth-callback/AuthCallBackPage"
import { AuthenticateWithRedirectCallback } from "@clerk/clerk-react"
import MainLayout from "./layout/MainLayout"
import ChatPage from "./pages/chat/ChatPage"
import AlbumPage from "./pages/album/AlbumPage"
import {AdminPage} from "@/pages/admin/AdminPage.tsx";
import {Toaster} from "react-hot-toast";
import NotFoundPage from "./pages/404/NotFoundPage";
function App() {
  
  return (
    <>
    <Routes>
      
      <Route path="/sso-callback" element={<AuthenticateWithRedirectCallback signUpForceRedirectUrl={"/auth-callback"}/>}/>
      <Route path="/auth-callback" element={<AuthCallBackPage/>}/>
      <Route path="/admin" element={<AdminPage/>}/>
      <Route element={<MainLayout/>}>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/chat" element={<ChatPage/>}/>
      <Route path="/albums/:albumId" element={<AlbumPage/>}/>
      <Route path="*" element={<NotFoundPage/>}/>
      </Route>
    </Routes>
    <Toaster/>
    </>
  )
}

export default App
````

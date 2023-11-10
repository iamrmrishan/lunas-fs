'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import {
  Bold,
  Code,
  Code2,
  Eraser,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  ImagePlus,
  Italic,
  List,
  ListOrdered,
  LucideYoutube,
  Minus,
  Pilcrow,
  Redo,
  RemoveFormatting,
  Strikethrough,
  TextQuote,
  Undo,
  WrapText,
} from 'lucide-react';
import { Button } from './ui/button';
import React from 'react';
import Youtube from '@tiptap/extension-youtube';

const MenuBar = ({ editor }: any) => {
  const widthRef = React.useRef<HTMLInputElement>(null);
  const heightRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (widthRef.current && heightRef.current) {
      widthRef.current.value = '640';
      heightRef.current.value = '480';
    }
  }, [widthRef.current, heightRef.current]);
  if (!editor) {
    return null;
  }
  const addImage = () => {
    const url = window.prompt('URL');

    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  };

  const addYoutubeVideo = () => {
    const url = prompt('Enter YouTube URL');

    if (url) {
      // Use window.matchMedia to check if the device is a mobile device
      const isMobile = window.matchMedia('(max-width: 767px)').matches;
    
      let width, height;
      if (isMobile) {
        // For mobile devices, use these sizes
        width = widthRef.current ? parseInt(widthRef.current.value, 10) : 320;
        height = heightRef.current ? parseInt(heightRef.current.value, 10) : 180;
      } else {
        // For desktop devices, use these sizes
        width = widthRef.current ? parseInt(widthRef.current.value, 10) : 640;
        height = heightRef.current ? parseInt(heightRef.current.value, 10) : 480;
      }
    
      width = Math.max(320, width);
      height = Math.max(180, height);
    
      editor.commands.setYoutubeVideo({
        src: url,
        width: width,
        height: height,
      });
    }
  };

  return (
      <div className="grid grid-cols-12 gap-0 w-full mb-10">
        <Button
          variant="outline"
          size="sm"
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={!editor.can().chain().focus().toggleBold().run()}
          className={editor.isActive('bold') ? 'is-active' : ''}
        >
          <Bold className="h-3 w-3" />
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={!editor.can().chain().focus().toggleItalic().run()}
          className={editor.isActive('italic') ? 'is-active' : ''}
        >
          <Italic className="h-3 w-3" />
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => editor.chain().focus().toggleStrike().run()}
          disabled={!editor.can().chain().focus().toggleStrike().run()}
          className={editor.isActive('strike') ? 'is-active' : ''}
        >
          <Strikethrough className="h-3 w-3" />
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => editor.chain().focus().toggleCode().run()}
          disabled={!editor.can().chain().focus().toggleCode().run()}
          className={editor.isActive('code') ? 'is-active' : ''}
        >
          <Code className="h-3 w-3" />
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => editor.chain().focus().unsetAllMarks().run()}
        >
          <RemoveFormatting className="h-3 w-3" />
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => editor.chain().focus().clearNodes().run()}
        >
          <Eraser className="h-3 w-3" />
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => editor.chain().focus().setParagraph().run()}
          className={editor.isActive('paragraph') ? 'is-active' : ''}
        >
          <Pilcrow className="h-3 w-3" />
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
          className={
            editor.isActive('heading', { level: 1 }) ? 'is-active' : ''
          }
        >
          <Heading1 className="h-3 w-3" />
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          className={
            editor.isActive('heading', { level: 2 }) ? 'is-active' : ''
          }
        >
          <Heading2 className="h-3 w-3" />
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
          className={
            editor.isActive('heading', { level: 3 }) ? 'is-active' : ''
          }
        >
          <Heading3 className="h-3 w-3" />
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 4 }).run()
          }
          className={
            editor.isActive('heading', { level: 4 }) ? 'is-active' : ''
          }
        >
          <Heading4 className="h-3 w-3" />
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 5 }).run()
          }
          className={
            editor.isActive('heading', { level: 5 }) ? 'is-active' : ''
          }
        >
          <Heading5 className="h-3 w-3" />
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 6 }).run()
          }
          className={
            editor.isActive('heading', { level: 6 }) ? 'is-active' : ''
          }
        >
          <Heading6 className="h-3 w-3" />
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={editor.isActive('bulletList') ? 'is-active' : ''}
        >
          <List className="h-3 w-3" />
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={editor.isActive('orderedList') ? 'is-active' : ''}
        >
          <ListOrdered className="h-3 w-3" />
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          className={editor.isActive('codeBlock') ? 'is-active' : ''}
        >
          <Code2 className="h-3 w-3" />
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={editor.isActive('blockquote') ? 'is-active' : ''}
        >
          <TextQuote className="h-3 w-3" />
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => editor.chain().focus().setHorizontalRule().run()}
        >
          <Minus className="h-3 w-3" />
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => editor.chain().focus().setHardBreak().run()}
        >
          <WrapText className="h-3 w-3" />
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().chain().focus().undo().run()}
        >
          <Undo className="h-3 w-3" />
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().chain().focus().redo().run()}
        >
          <Redo className="h-3 w-3" />
        </Button>
        <Button variant="outline" size="sm" onClick={addImage}>
          <ImagePlus className="h-3 w-3" />
        </Button>
        <Button variant="outline" size="sm" onClick={addYoutubeVideo}>
          <LucideYoutube className="h-3 w-3" />
        </Button>
      </div>
  );
};

export function Tiptap() {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Image,
      Youtube.configure({
        controls: false,
      }),
    ],
    editorProps: {
      attributes: {
        class:
          'prose dark:prose-invert prose-sm sm:prose-base lg:prose-lg xl:prose-2xl focus:outline-none',
      },
    },
    content: `
    <h2>
      Hi there,
    </h2>
    <p>
      this is a basic <em>basic</em> example of <strong>tiptap</strong>. Sure, there are all kind of basic text styles you’d probably expect from a text editor. But wait until you see the lists:
    </p>
    <ul>
      <li>
        That’s a bullet list with one …
      </li>
      <li>
        … or two list items.
      </li>
    </ul>
    <p>
      Isn’t that great? And all of that is editable. But wait, there’s more. Let’s try a code block:
    </p>
<pre><code class="language-css">body {
  display: none;
}</code></pre>
    <p>
      I know, I know, this is impressive. It’s only the tip of the iceberg though. Give it a try and click a little bit around. Don’t forget to check the other examples too.
    </p>
    <blockquote>
      Wow, that’s amazing. Good work, boy! 👏
      <br />
      — Mom
    </blockquote>
  `,
  });

  return (
    <div>
      <MenuBar className='w-full' editor={editor} />
      <EditorContent className='w-full' editor={editor} />
    </div>
  );
}

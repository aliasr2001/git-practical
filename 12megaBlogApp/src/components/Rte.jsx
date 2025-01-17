import React from 'react'
import { Editor } from '@tinymce/tinymce-react'
import { Controller } from 'react-hook-form'
import Conf from '../conf/Conf'

export default function Rte({
  name,
  control,
  label,
  defaultValue = '',
}) {
  return (
    <div className='w-full'>
      {label && <label className='inline-block mb-1 pl-1'>
        {label}
      </label>}

      <Controller
        name={name || 'content'}
        control={control}
        render={({field : {onChange}}) => (
          <Editor
            initialValue={defaultValue}
            apiKey='bisc6abkqblk3n16rrbxv1u5wq5hmwq5liov2hfzekddwgcq'
            init={{
              height: 500,
              menubar: false,
              plugins: [
                "image",
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
                "anchor",
            ],
              toolbar:
                'undo redo | formatselect | bold italic backcolor | \
                alignleft aligncenter alignright alignjustify | \
                bullist numlist outdent indent | removeformat | help',
              content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
            }}
            onEditorChange={onChange}
          />
        )}
      />
    </div>
  )
}


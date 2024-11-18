import React from 'react'

function FormBlogEditor() {
  return (
    <div>
      <div>
      <h1>Add a new tips</h1>
      <form>
        <label>Tips Image:</label>
        <input type="file" name="image" />
        <br/>
        <label>Tips Title:</label>
        <input type="text" name="title" />
        <br/>
        <label>Tips Content:</label>
        <textarea name="content" />
        <br/>
        <button>Add</button>
      </form>
      </div>

      <br />
      <br />
      <br />

      <div>
      <h1>Add New Content</h1>
      <form>
        <label> Image:</label>
        <input type="file" name="image" />
        <br/>
        <label>Title:</label>
        <input type="text" name="title" />
        <br/>
        <button >Add</button>
      </form>
      </div>
    </div>
  )
}

export default FormBlogEditor
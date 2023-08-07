import React from 'react'

const Page = () => {
  return (
    <div>
        <div className="text-editor">
      <QuillToolBar />
      <div className="innerItems">
      <div className="leftoptions">
      <div className="btnsymbl"><h2>Summary</h2><BsPlus className="bsplus" onClick={handleinputarea}/> 
      </div> 
        <input type="hidden" name="summary" id="summarytext"   value={textvl} placeholder="Give Your Document A Summary" onChange={(e)=>{handleChangeText(e)}}
        />
      </div>
      <ReactQuill id="container"
        theme="snow"
        value={state.value}
        onChange={handleChange}
        placeholder={"Write something awesome..."}
        modules={modules}
        formats={formats}
      />
    </div>
      </div>
    </div>
  )
}

export default Page
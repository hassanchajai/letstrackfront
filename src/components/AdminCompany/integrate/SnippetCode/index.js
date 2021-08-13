import ClipboardJS from "clipboard";
import hljs from "highlight.js";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { BaseName } from "../../../../DB/config";

const languages = ["Javascript(fetch)", "Javascript (Axios)"];

export const SnippetCode = ({ styles, CurrentMethod }) => {
  const [languagesAvailaible, SetLanguages] = useState([]);
  const [Selectedlanguage, setSelectedlanguage] = useState(0);
  const [code, SetCode] = useState("");
  const [codeNoHighlight, SetCodeNoHighlight] = useState("");
  useEffect(() => {
    new ClipboardJS(".get");
    if (CurrentMethod) {
      SetLanguages(languages);
      generateCode(Selectedlanguage);
    }
  }, [CurrentMethod, Selectedlanguage]);
  // const notify = (str) => toast.success(str);
  const generateCode = (lang) => {
    const { url, headers, body, method } = CurrentMethod;
    let highlightCode = ``;
    switch (lang) {
      // language 1
      case "Javascript(fetch)": {
        // add url
        highlightCode += `fetch('${BaseName+"methods/"+url}',{
         `;
        highlightCode += `method:'${method}',`;
        // add headers
        headers.map((item, i) => {
          if (i === 0)
            highlightCode += `
         headers:{
          `;
          highlightCode += `'${item.name}':'${item.defaultValue}',
           `;
          if (i + 1 === headers.length)
            highlightCode += `},
         `;
        });
        body.map((item, i) => {
          if (i === 0)
            highlightCode += `
         body:JSON.stringify({
          `;
          highlightCode += ` '${item.name}':'${item.defaultValue}',
           `;
          if (i + 1 === body.length)
            highlightCode += `}),
         `;
        });
        // add body

        highlightCode += `})
        .then(data=>data.json())
        .then(res=>console.log(res))`;
        SetCode(
          hljs.highlight(highlightCode, { language: "javascript" }).value
        );
        break;
      }
      // language 2
      case "Javascript (Axios)": {
        highlightCode = `/* first you should install axios
with the command
npm install axios@latest */

`;

        // add url
        highlightCode += `axios.post('${BaseName+"methods/"+url}'
         `;
        // highlightCode += `method:'${method}'`;
        // add headers
        if (body.length !== 0) {
          body.map((item, i) => {
            if (i === 0)
              highlightCode += `,{ 
             `;
            highlightCode += ` ${item.name}:'${item.defaultValue}',
             `;
            //   if(i !== 0 || i+1 !== headers.length) highlightCode += `,
            //   `;
            if (i + 1 === body.length)
              highlightCode += `}
           `;
          });
        }

        // add header
        headers.map((item, i) => {
          if (i === 0)
            highlightCode += `,{
            headers:{
            `;
          highlightCode += `'${item.name}':'${item.defaultValue}',
            `;
          if (i + 1 === headers.length)
            highlightCode += `}
        }
           `;
        });

        highlightCode += `)
        .then(res=>res.data)`;

        SetCode(
          hljs.highlight(highlightCode, { language: "javascript" }).value
        );

        break;
      }
      default: {
        // SetCodeNoHighlight(highlightCode);
        SetCode("printf('No code yeet !')");
      }
    }
    SetCodeNoHighlight(highlightCode);
  };
  //   const [Code, setCode] = useState("");
  return (
    <div className="col-12 col-md-4">
      <div className={styles.parametresitem}>
        <div className={styles.header}>
          <h5>
            <i className="fas fa-code"></i> Snippets
          </h5>
        </div>
        {/* end of header */}
        <div className={styles.body}>
          <div className="d-flex mb-3">
            <select
              className="form-select"
              value={Selectedlanguage}
              onChange={(e) => {
                setSelectedlanguage(e.target.value);
                generateCode(e.target.value);
              }}
            >
              <option value="0" disabled selected>
                Selected language
              </option>
              {languagesAvailaible.map((language, i) => (
                <option value={language}>{language}</option>
              ))}
            </select>
            <button
              className="mx-2 btn bg-primary get"
              data-clipboard-text={codeNoHighlight}
              onClick={() => {
                toast("copied to clipboard!");
              }}
            >
              Copy
            </button>
          </div>
          <label className="mb-3">Code :</label>
          <hr></hr>
          <pre dangerouslySetInnerHTML={{ __html: code }} />
          <hr></hr>
        </div>
        {/* end of body */}
      </div>
    </div>
  );
};

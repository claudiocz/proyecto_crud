import {Fragment,useCallback,useContext,useEffect} from "react"
import {Box as RadixThemesBox,Button as RadixThemesButton,Checkbox as RadixThemesCheckbox,Container as RadixThemesContainer,Flex as RadixThemesFlex,Heading as RadixThemesHeading,Separator as RadixThemesSeparator,Text as RadixThemesText,TextArea as RadixThemesTextArea,TextField as RadixThemesTextField} from "@radix-ui/themes"
import DebounceInput from "react-debounce-input"
import {EventLoopContext,StateContexts} from "$/utils/context"
import {ReflexEvent,isNotNullOrUndefined,isTrue} from "$/utils/state"
import {jsx} from "@emotion/react"




function Debounceinput_8e6e5fe062ec506eacbf1aad5be4bef9 () {
  const reflex___state____state__tarea_app___tarea_app____estado_tarea = useContext(StateContexts.reflex___state____state__tarea_app___tarea_app____estado_tarea)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_9b50664834d6c230aeb3edda3b7ebbfd = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.tarea_app___tarea_app____estado_tarea.set_nuevo_titulo", ({ ["value"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(DebounceInput,{css:({ ["width"] : "100%" }),debounceTimeout:300,element:RadixThemesTextField.Root,onChange:on_change_9b50664834d6c230aeb3edda3b7ebbfd,placeholder:"T\u00edtulo de la tarea",value:(isNotNullOrUndefined(reflex___state____state__tarea_app___tarea_app____estado_tarea.nuevo_titulo_rx_state_) ? reflex___state____state__tarea_app___tarea_app____estado_tarea.nuevo_titulo_rx_state_ : "")},)
  )
}


function Debounceinput_a7481f3c402501edbcbc2eb7b7a5dc0d () {
  const reflex___state____state__tarea_app___tarea_app____estado_tarea = useContext(StateContexts.reflex___state____state__tarea_app___tarea_app____estado_tarea)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_65d36a0ed55932b42d7b3f9aad38d116 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.tarea_app___tarea_app____estado_tarea.set_nuevo_descripcion", ({ ["value"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(DebounceInput,{css:({ ["width"] : "100%" }),debounceTimeout:300,element:RadixThemesTextArea,onChange:on_change_65d36a0ed55932b42d7b3f9aad38d116,placeholder:"Descripci\u00f3n",value:reflex___state____state__tarea_app___tarea_app____estado_tarea.nuevo_descripcion_rx_state_},)
  )
}


function Button_cfa5759040100c242f0c1290ce28c342 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_5fd8fe36e479ab6afbd36408b1b0e719 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.tarea_app___tarea_app____estado_tarea.agregar_tarea", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["width"] : "100%", ["backgroundColor"] : "blue", ["color"] : "white", ["border"] : "none", ["borderRadius"] : "10px", ["padding"] : "3", ["marginTop"] : "2", ["marginBottom"] : "2" }),onClick:on_click_5fd8fe36e479ab6afbd36408b1b0e719},"Agregar Tarea")
  )
}


function Flex_876f146754dd62a45c872b809096d738 () {
  const reflex___state____state__tarea_app___tarea_app____estado_tarea = useContext(StateContexts.reflex___state____state__tarea_app___tarea_app____estado_tarea)
const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%", ["padding"] : "4" }),direction:"column",gap:"3"},Array.prototype.map.call(reflex___state____state__tarea_app___tarea_app____estado_tarea.tareas_rx_state_ ?? [],((tarea_rx_state_,index_ad61c2ce61ecb8b152a4c5bcf9010a43)=>(jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%", ["border"] : "1px solid", ["borderColor"] : "gray.200", ["borderRadius"] : "10px", ["padding"] : "15px", ["marginTop"] : "2", ["marginBottom"] : "2" }),direction:"row",key:index_ad61c2ce61ecb8b152a4c5bcf9010a43,gap:"3"},jsx(RadixThemesText,{as:"label",size:"2"},jsx(RadixThemesFlex,{gap:"2"},jsx(RadixThemesCheckbox,{css:({ ["isChecked"] : tarea_rx_state_?.["completada"] }),onCheckedChange:((_ev_0) => (addEvents([(ReflexEvent("reflex___state____state.tarea_app___tarea_app____estado_tarea.marcar_tarea", ({ ["id_tarea"] : tarea_rx_state_?.["id"] }), ({  })))], [_ev_0], ({  })))),size:"2"},),"")),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["alignItems"] : "start", ["width"] : "100%" }),direction:"column",gap:"3"},jsx(RadixThemesText,{as:"p",css:({ ["textDecoration"] : (isTrue(tarea_rx_state_?.["completada"]) ? "line-through" : "none"), ["fontWeight"] : "bold" })},tarea_rx_state_?.["titulo"]),jsx(RadixThemesText,{as:"p",css:({ ["color"] : "gray", ["fontSize"] : "1rem" })},(!((tarea_rx_state_?.["descripcion"]?.valueOf?.() === ""?.valueOf?.())) ? tarea_rx_state_?.["descripcion"] : "Sin descripci\u00f3n")),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"row",gap:"1"},jsx(RadixThemesText,{as:"p",css:({ ["color"] : "gray", ["fontSize"] : "0.8rem" })},"Creado: "),jsx(RadixThemesText,{as:"p",css:({ ["color"] : "gray", ["fontSize"] : "1rem" })},tarea_rx_state_?.["formato_tareas"]))),jsx(RadixThemesFlex,{css:({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })},),jsx(RadixThemesButton,{color:"blue",css:({ ["borderRadius"] : "10px" }),onClick:((_e) => (addEvents([(ReflexEvent("reflex___state____state.tarea_app___tarea_app____estado_tarea.editar_tarea", ({ ["id_tarea"] : tarea_rx_state_?.["id"] }), ({  })))], [_e], ({  })))),size:"1"},"Editar"),jsx(RadixThemesButton,{color:"red",css:({ ["borderRadius"] : "10px" }),onClick:((_e) => (addEvents([(ReflexEvent("reflex___state____state.tarea_app___tarea_app____estado_tarea.eliminar_tarea", ({ ["id_tarea"] : tarea_rx_state_?.["id"] }), ({  })))], [_e], ({  })))),size:"1"},"Eliminar"))))))
  )
}


function Fragment_8f033556ac07f5c238d7f82962f88660 () {
  const reflex___state____state__tarea_app___tarea_app____estado_tarea = useContext(StateContexts.reflex___state____state__tarea_app___tarea_app____estado_tarea)



  return (
    jsx(Fragment,{},((reflex___state____state__tarea_app___tarea_app____estado_tarea.tareas_rx_state_.length > 0)?(jsx(Fragment,{},jsx(Flex_876f146754dd62a45c872b809096d738,{},))):(jsx(Fragment,{},jsx(RadixThemesBox,{css:({ ["padding"] : "4", ["textAlign"] : "center", ["color"] : "gray" })},"No hay tareas pendientes. \u00a1Comienza a agregar una!")))))
  )
}


export default function Component() {





  return (
    jsx(Fragment,{},jsx(RadixThemesContainer,{css:({ ["padding"] : "15px", ["colorScheme"] : "dark", ["backgroundColor"] : "#121212", ["minHeight"] : "100vh", ["centerContent"] : true }),size:"3"},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["padding"] : "15px", ["width"] : "100%", ["maxWidth"] : "600px", ["borderRadius"] : "10px", ["backgroundColor"] : "#1E1E1E", ["color"] : "white" }),direction:"column",gap:"3"},jsx(RadixThemesHeading,{css:({ ["fontSize"] : "2rem", ["marginTop"] : "3px", ["marginBottom"] : "3px" })},"Gestor de Tareas"),jsx(RadixThemesSeparator,{size:"4"},),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["padding"] : "15px", ["width"] : "100%" }),direction:"column",gap:"4"},jsx(Debounceinput_8e6e5fe062ec506eacbf1aad5be4bef9,{},),jsx(Debounceinput_a7481f3c402501edbcbc2eb7b7a5dc0d,{},),jsx(Button_cfa5759040100c242f0c1290ce28c342,{},)),jsx(RadixThemesSeparator,{size:"4"},),jsx(Fragment_8f033556ac07f5c238d7f82962f88660,{},))),jsx("title",{},"TareaApp | Index"),jsx("meta",{content:"favicon.ico",property:"og:image"},))
  )
}
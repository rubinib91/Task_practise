export const getdata=async (req,res)=>{
    // console.log(req.body)
    try {
        const datas = req.body
        res.status(201).json({mesg:"userdata stored",datas})
    } catch (error) {
        res.status(500).json({mesg:"userdata not  stored"})
    }
}


export const getdatabyid= (req,res)=>{
    // console.log(req.body)
    try {
        const userid = req.params.id
        res.status(201).json({mesg:"userdata received",userid})
    } catch (error) {
        res.status(500).json({mesg:"userdata not received"})
    }
}
export const getdatabyquery= (req,res)=>{
    // console.log(req.body)
    try {
        const userid = req.params.id
        res.status(201).json({mesg:"userdata received",userid})
    } catch (error) {
        res.status(500).json({mesg:"userdata not received"})
    }
}


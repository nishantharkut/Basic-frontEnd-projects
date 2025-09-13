export function getAllNotes(req, res) {
    res.status(200).json({
        message: "got the notes!"
    });
};

// export async getAllNotes (req, res){
//     try {

//     }
//     catch{

//     }
// };

export function postAllNotes (req, res){
    res.status(201).json({
        message: "posted one note"
    });
};

export function putAllNotes(req, res){
    res.status(200).json({
        message: "modifications made"
    });
};

export function deleteAllNotes(req, res){
    res.status(200).json({
        message : "oh deleted!"
    });
};
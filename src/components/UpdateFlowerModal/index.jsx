import { Box, Button, Card, CardContent, CardHeader, Checkbox, Modal, Rating, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { doPut } from "../../service/orchidService";

const style = {
    position: 'absolute',
    top: "50%",
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    borderRadius: "16px",
    boxShadow: 24,
    padding: "40px 40px",
    maxHeight: '100vh',
    overflowY: 'auto',
    overflowX: 'none',
    boxSizing: 'border-box',
};

const validationSchema = Yup.object({
    name: Yup.string()
        .required("Name is required")
        .min(3, "Min length is 3")
        .max(100, "Max length is 100"),
    desc: Yup.string()
        .required("Description is required")
        .min(3, "Min length is 3")
        .max(100, "Max length is 100"),
    image: Yup.string()
        .required()
        .url("Image url must be valid"),
    color: Yup.string()
        .required("Color is required")
        .min(1, "Min length is 1"),
    origin: Yup.string()
        .required("Origin is required")
        .min(3, "Min length is 3")
        .max(100, "Max length is 100"),
    category: Yup.string()
        .required("Category is required")
        .min(3, "Min length is 3")
        .max(100, "Max length is 100"),
    rating: Yup.number()
        .default(0),
    numberOfLike: Yup.number()
        .required("Number of like is required")
        .min(0, "Min is 0")
        .max(100, "Max is 100")
        .default(0),
    isSpecial: Yup.boolean()
        .default(false),
    isNatural: Yup.boolean()
        .default(false)
})


function UpdateFlowerModal({ open, handleClose, orchid }) {

    const formik = useFormik({
        initialValues: {
            name: orchid.name,
            desc: orchid.desc,
            image: orchid.image,
            color: orchid.color,
            origin: orchid.origin,
            category: orchid.category,
            rating: orchid.rating,
            numberOfLike: orchid.numberOfLike,
            isSpecial: orchid.isSpecial,
            isNatural: orchid.isNatural
        },
        validationSchema: validationSchema,
        validateOnChange: false,
        validateOnBlur: true,
        onSubmit: async (values, { resetForm }) => {
            await handleSubmit(values, resetForm);
        }
    });

    const handleSubmit = async (values, resetForm) => {
        await doPut(`/${orchid.id}`, values);
    }

    return (
        <>
            <Modal open={open} onClose={handleClose}>
                <Card style={style}>
                    <CardHeader title={
                        <Typography variant="h5" align="center">
                            {"Update Flower " + orchid.id}
                        </Typography>
                    }
                        sx={{ marginBottom: "-10px" }}
                    />

                    <CardContent sx={{ marginTop: "-10px" }}>
                        <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column" }}
                            component={"form"}
                            onSubmit={formik.handleSubmit}>
                            <Box sx={{ display: "flex", justifyContent: "space-between", flexDirection: "row" }}>
                                <Box sx={{ width: "48%" }}>
                                    <TextField
                                        size="small"
                                        fullWidth
                                        variant="standard"
                                        label="Name"
                                        name="name"
                                        value={formik.values.name}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        error={formik.touched.name && Boolean(formik.errors.name)}
                                        helperText={formik.errors.name}
                                    />

                                    <TextField
                                        size="small"
                                        fullWidth
                                        variant="standard"
                                        label="Description"
                                        name="desc"
                                        value={formik.values.desc}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        error={formik.touched.desc && Boolean(formik.errors.desc)}
                                        helperText={formik.errors.desc}
                                    />

                                    <TextField
                                        size="small"
                                        fullWidth
                                        variant="standard"
                                        label="Image"
                                        name="image"
                                        value={formik.values.image}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        error={formik.touched.image && Boolean(formik.errors.image)}
                                        helperText={formik.errors.image}
                                    />

                                    <TextField
                                        size="small"
                                        fullWidth
                                        variant="standard"
                                        label="Color"
                                        name="color"
                                        value={formik.values.color}
                                        error={formik.touched.color && Boolean(formik.errors.color)}
                                        helperText={formik.errors.color}
                                    />

                                    <TextField
                                        size="small"
                                        fullWidth
                                        variant="standard"
                                        label="Origin"
                                        name="origin"
                                        value={formik.values.origin}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        error={formik.touched.origin && Boolean(formik.errors.origin)}
                                        helperText={formik.errors.origin}
                                    />
                                </Box>

                                <Box sx={{ width: "48%" }}>
                                    <TextField
                                        size="small"
                                        fullWidth
                                        variant="standard"
                                        label="Category"
                                        name="category"
                                        value={formik.values.category}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        error={formik.touched.category && Boolean(formik.errors.category)}
                                        helperText={formik.errors.category}
                                    />

                                    <Box sx={{ display: "flex", gap: "20px", marginTop: "8px", marginBottom: "8px" }}>
                                        <Typography variant="subtitle1" color="textSecondary">
                                            Rating
                                        </Typography>
                                        <Rating />
                                    </Box>

                                    <TextField
                                        size="small"
                                        fullWidth
                                        type="number"
                                        variant="standard"
                                        label="Number of likes"
                                        name="numberOfLike"
                                        value={formik.values.numberOfLike}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        error={formik.touched.numberOfLike && Boolean(formik.errors.numberOfLike)}
                                        helperText={formik.errors.numberOfLike}
                                    />

                                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "40px", marginTop: "20px" }}>
                                        <Box sx={{ display: "flex", alignItems: "center" }}>
                                            <Typography color="textSecondary">
                                                Special
                                            </Typography>
                                            <Checkbox
                                                name="isSpecial"
                                                checked={formik.values.isSpecial}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur} />
                                        </Box>

                                        <Box sx={{ display: "flex", alignItems: "center" }}>
                                            <Typography color="textSecondary">
                                                Natural
                                            </Typography>
                                            <Checkbox
                                                name="isNatural"
                                                checked={formik.values.isNatural}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur} />
                                        </Box>

                                    </Box>
                                </Box>
                            </Box>

                            <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "row" }}>
                                <Button
                                    sx={{ width: "20%", marginTop: "20px" }}
                                    variant="contained"
                                    color="secondary"
                                    type="submit"
                                >
                                    Update!!
                                </Button>
                            </Box>
                        </Box>


                    </CardContent>
                    <CardContent />
                </Card>
            </Modal>
        </>
    )
}

export default UpdateFlowerModal;

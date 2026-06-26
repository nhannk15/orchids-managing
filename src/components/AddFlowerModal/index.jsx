import { Box, Button, Card, CardContent, CardHeader, Checkbox, CircularProgress, FormControl, FormHelperText, Input, InputLabel, Modal, Rating, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { doPost } from "../../service/orchidService";
import { CheckBox } from "@mui/icons-material";

const cardStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    maxHeight: '90vh',
    overflowY: 'auto',
    borderRadius: "16px",
    padding: "30px"
};

const validationSchema = Yup.object({
    name: Yup.string()
        .required("Name can't be left empty")
        .min(3, "Min length is 3 characters")
        .max(50, "Max length is 50 characters"),
    desc: Yup.string()
        .required("Description can't be left empty")
        .min(3, "Min length is 3 characters")
        .max(100, "Max length is 100 characters"),
    image: Yup.string()
        .required("Image can't be left null")
        .url("Image url must be valid"),
    color: Yup.string()
        .required("Color can't be left empty")
        .min(3, "Min length is 3 characters"),
    origin: Yup.string()
        .required("Origin can't be left empty")
        .min(3, "Min length is 3 characters"),
    category: Yup.string()
        .required("Category can't be left empty")
        .min(3, "Min length is 3 characters"),
    rating: Yup.number()
        .required("Rating can't be left empty")
        .min(0, "Min rating is 0"),
    numberOfLike: Yup.number()
        .required("numberOfLike can't be left empty")
        .default(0)
        .min(0, "Min numberOfLike is 0"),
    isSpecial: Yup.boolean()
        .default(false),
    isNatural: Yup.boolean()
        .default(false),
});

function AddFlowerModal({ open, handleClose, orchid, setLoading, submitting, setSubmitting }) {

    const formik = useFormik({
        initialValues: {
            name: "",
            desc: "",
            image: "",
            color: "",
            origin: "",
            category: "",
            rating: 0,
            numberOfLike: 0,
            isSpecial: false,
            isNatural: false
        },
        validationSchema: validationSchema,
        validateOnChange: false,
        validateOnBlur: true,
        onSubmit: async (values, { resetForm }) => {
            await handleSubmit(values, resetForm);
        }
    });

    const handleSubmit = async (values, resetForm) => {
        try {
            const resposneData = doPost("", values);
            setSubmitting(true);
            setTimeout(() => {
                resetForm();
                handleClose();
                setLoading(true);
                setSubmitting(false);
            }, 1000);
        } catch (error) {
            console.log("Error " + error);
        }
    }

    return (
        <Modal open={open} onClose={handleClose}>
            <Card sx={cardStyle}>
                <CardHeader
                    title={
                        <Typography variant="h4">
                            Add a new Orchid
                        </Typography>
                    }
                    sx={{ textAlign: "center", paddingBottom: "0px" }} />
                <CardContent sx={{ paddingTop: "0px" }}>
                    <Box component="form" onSubmit={formik.handleSubmit} sx={{ display: "flex", flexDirection: "column" }}>
                        <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                            <Box sx={{ width: "48%" }}>
                                <TextField
                                    fullWidth
                                    variant="standard"
                                    label="Name"
                                    name="name"
                                    value={formik.values.name}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.name && Boolean(formik.errors.name)}
                                    helperText={formik.touched.name && formik.errors.name} />

                                <TextField
                                    fullWidth
                                    variant="standard"
                                    label="Description"
                                    name="desc"
                                    value={formik.values.desc}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.desc && Boolean(formik.errors.desc)}
                                    helperText={formik.errors.desc} />

                                <TextField
                                    fullWidth
                                    variant="standard"
                                    label="Image"
                                    name="image"
                                    value={formik.values.image}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.image && Boolean(formik.errors.image)}
                                    helperText={formik.errors.image} />

                                <TextField
                                    fullWidth
                                    variant="standard"
                                    label="Color"
                                    name="color"
                                    value={formik.values.color}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.color && Boolean(formik.errors.color)}
                                    helperText={formik.errors.color} />

                                <TextField
                                    fullWidth
                                    variant="standard"
                                    label="Origin"
                                    name="origin"
                                    value={formik.values.origin}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.origin && Boolean(formik.errors.origin)}
                                    helperText={formik.errors.origin} />
                            </Box>

                            <Box sx={{ width: "48%" }}>
                                <TextField
                                    fullWidth
                                    variant="standard"
                                    label="Category"
                                    name="category"
                                    value={formik.values.category}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.category && Boolean(formik.errors.category)}
                                    helperText={formik.errors.category} />

                                <Box sx={{ display: "flex", justifyContent: "left", gap: "20px", marginTop: "19px" }}>
                                    <Typography variant="subtitle1" color="textSecondary">
                                        Rating
                                    </Typography>
                                    <Rating
                                        fullWidth
                                        label="a"
                                    />
                                </Box>

                                <TextField
                                    fullWidth
                                    variant="standard"
                                    label="Number of likes"
                                    type="number"
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

                        <Box sx={{ display: "flex", justifyContent: "center", width: "100%", flex: 1 }}>
                            <Button
                                sx={{ width: "30%", marginTop: "10px" }}
                                type="submit"
                                variant="contained"
                                color="secondary"
                                startIcon={submitting && <CircularProgress size={20} color="inherit" />}>
                                Add!
                            </Button>
                        </Box>

                    </Box>
                </CardContent>
            </Card>
        </Modal>
    )
}

export default AddFlowerModal;
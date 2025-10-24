export const errorHandler = (err, req, res, next) => {
    console.error(err.stack);

    if (err.name === 'ValidationError') {
        return res.status(400).json({
            success: false,
            error: 'Error de validación',
            details: err.message
        });
    }

    if (err.code === '23505') {
        return res.status(409).json({
            success: false,
            error: 'Este registro ya existe'
        });
    }

    res.status(err.status || 500).json({
        success: false,
        error: err.message || 'Error interno del servidor'
    });
};

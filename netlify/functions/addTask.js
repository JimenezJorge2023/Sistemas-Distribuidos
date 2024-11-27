exports.handler = async (event) => {
    try {
        const body = JSON.parse(event.body);
        const task = body.task;

        if (!task) {
            return {
                statusCode: 400,
                body: JSON.stringify({ error: "Tarea es Requerida" }),
            };
        }

        return {
            statusCode: 200,
            body: JSON.stringify({ task }),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Internal Server Error" }),
        };
    }
};

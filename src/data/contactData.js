export const createSlackMessage = (data) => {
    // 1. Obtener fecha y hora actual
    const now = new Date();
    
    // 2. Formatear componentes
    // Mes abreviado (ej: "dic") con la primera letra en mayúscula
    const month = now.toLocaleDateString('es-ES', { month: 'short' });
    const monthCap = month.charAt(0).toUpperCase() + month.slice(1);
    
    const day = String(now.getDate()).padStart(2, '0');
    const year = now.getFullYear();
    
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    // 3. Construir string final: "22 Dic, 2025 - 14:30:00"
    const formattedDate = `${day} ${monthCap}, ${year} - ${hours}:${minutes}:${seconds}`;
    return {
        "attachments": [
            {
                "color": "#36a64f",
                "blocks": [
                    {
                        "type": "header",
                        "text": {
                            "type": "plain_text",
                            "text": "🚴‍♂️ Nuevo Lead Capturado",
                            "emoji": true
                        }
                    },
                    {
                        "type": "section",
                        "text": {
                            "type": "mrkdwn",
                            "text": "*¡Enhorabuena!* Un cliente potencial ha llenado el formulario."
                        }
                    },
                    {
                        "type": "divider"
                    },
                    {
                        "type": "section",
                        "fields": [
                            {
                                "type": "mrkdwn",
                                "text": `*Cliente:*\n${data.name}`
                            },
                            {
                                "type": "mrkdwn",
                                "text": `*Email:*\n${data.email}`
                            },
                            {
                                "type": "mrkdwn",
                                "text": `*Teléfono:*\n${data.phone || "N/A"}`
                            },
                            {
                                "type": "mrkdwn",
                                "text": `*Interés:*\n${data.model}`
                            }
                        ]
                    },
                    {
                        "type": "divider"
                    },
                    {
                        "type": "section",
                        "text": {
                            "type": "mrkdwn",
                            "text": `*Mensaje:*\n${data.message || '_Sin mensaje_'}`
                        }
                    },
                    {
                        "type": "context",
                        "elements": [
                            {
                                "type": "mrkdwn",
                                "text": `📅 Enviado el: ${formattedDate}`
                            }
                        ]
                    }
                ]
            }
        ]
    }
}
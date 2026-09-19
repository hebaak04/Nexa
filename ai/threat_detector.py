# -------------------------
# Nexa Threat Detector
# -------------------------

def analyze_message(message_text: str):
    """
    Analyze a message and return:
    - threat_type
    - risk_level
    - confidence
    """

    return {
        "threat_type": "safe",
        "risk_level": "safe",
        "confidence": 100.0
    }
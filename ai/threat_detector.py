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

    text = message_text.lower().strip()

    # -------------------------
    # Blackmail Detection
    # -------------------------
    blackmail_keywords = [
        "pay me",
        "send money",
        "give me money",
        "i will expose you",
        "i will post your photos",
        "i will share your photos",
        "send me money or",
        "if you don't pay"
    ]

    # -------------------------
    # Threat Detection
    # -------------------------
    threat_keywords = [
        "i will hurt you",
        "i will kill you",
        "i'll hurt you",
        "i'll kill you",
        "you will regret this",
        "i know where you live"
    ]

    # -------------------------
    # Harassment Detection
    # -------------------------
    harassment_keywords = [
        "idiot",
        "stupid",
        "loser",
        "shut up",
        "you are ugly",
        "you are worthless"
    ]

    # -------------------------
    # Grooming Detection
    # -------------------------
    grooming_keywords = [
        "keep this secret",
        "don't tell your parents",
        "don't tell anyone",
        "send me a private photo",
        "send me a picture of yourself",
        "meet me alone",
        "you are mature for your age"
    ]

    # -------------------------
    # Check Blackmail
    # -------------------------
    for keyword in blackmail_keywords:
        if keyword in text:
            return {
                "threat_type": "blackmail",
                "risk_level": "high_risk",
                "confidence": 95.0
            }

    # -------------------------
    # Check Threat
    # -------------------------
    for keyword in threat_keywords:
        if keyword in text:
            return {
                "threat_type": "threat",
                "risk_level": "high_risk",
                "confidence": 95.0
            }

    # -------------------------
    # Check Grooming
    # -------------------------
    for keyword in grooming_keywords:
        if keyword in text:
            return {
                "threat_type": "grooming",
                "risk_level": "high_risk",
                "confidence": 90.0
            }

    # -------------------------
    # Check Harassment
    # -------------------------
    for keyword in harassment_keywords:
        if keyword in text:
            return {
                "threat_type": "harassment",
                "risk_level": "suspicious",
                "confidence": 85.0
            }

    # -------------------------
    # Safe Message
    # -------------------------
    return {
        "threat_type": "safe",
        "risk_level": "safe",
        "confidence": 100.0
    }
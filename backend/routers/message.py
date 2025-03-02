from fastapi import APIRouter

router = APIRouter()

@router.post("/message/send")
async def message_create():
    pass

@router.get("/message/get")
async def message_get():
    pass
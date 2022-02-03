import fastapi as _fastapi
import sqlalchemy.orm as _orm

import schemas as _schemas
import services as _services

app = _fastapi.FastAPI()


@app.post("/api/users")
async def create_user(
        user: _schemas.UserCreate, db: _orm.Session = _fastapi.Depends(_services.get_db)
):
    db_user = await _services.get_user_by_email(user.email, db)
    if db_user:
        raise _fastapi.HTTPException(status_code=400, detail="Email already in user")

    return await _services.create_user(user, db)

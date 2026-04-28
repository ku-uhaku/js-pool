const getAcceleration = (input) => {
    if (input.f !== undefined && input.m !== undefined) {
        return input.f / input.m;
    } else if (input.Δv !== undefined && input.Δt !== undefined) {
        return input.Δv / input.Δt;
    } else if (input.d !== undefined && input.t !== undefined) {
        return (2 * input.d) / input.t ** 2;
    }

    return "impossible";
};

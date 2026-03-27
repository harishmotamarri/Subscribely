from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Plan, Subscription
from users.models import User


@api_view(['GET'])
def get_plans(request):
    plans = Plan.objects.all().values()
    return Response(plans)


@api_view(['POST'])
def subscribe(request):
    user_id = request.data.get('user_id')
    plan_id = request.data.get('plan_id')

    user = User.objects.get(id=user_id)
    plan = Plan.objects.get(id=plan_id)

    Subscription.objects.create(user=user, plan=plan)

    return Response({'message': 'Subscription successful'})


@api_view(['GET'])
def dashboard(request, user_id):
    subs = Subscription.objects.filter(user_id=user_id).values(
        'plan__name',
        'plan__price',
        'status',
        'start_date'
    )
    return Response(subs)